const customSort = (arr: string[], sortOrder = "asc") => {
   const list = [...arr]
   list.sort((a, b) => {
      const numA = parseFloat(a.replace(/[^\d.-]/g, ""))
      const numB = parseFloat(b.replace(/[^\d.-]/g, ""))

      if (isNaN(numA) && isNaN(numB)) {
         if (sortOrder === "desc") {
            return b.localeCompare(a)
         }
         return a.localeCompare(b)
      }

      if (!isNaN(numA) && !isNaN(numB)) {
         if (sortOrder === "desc") {
            return numB - numA
         }
         return numA - numB
      }

      if (isNaN(numA)) {
         return sortOrder === "desc" ? 1 : -1
      }

      if (isNaN(numB)) {
         return sortOrder === "desc" ? -1 : 1
      }

      return 0
   })

   return list
}

const extractNumericValue = (str: string) => {
   const numericRegex = /[\d.,]+/g
   const numericMatch = str.match(numericRegex)

   if (numericMatch) {
      const sanitizedValue = numericMatch[0].replace(/[^\d.-]/g, "")
      return parseFloat(sanitizedValue)
   }

   return null
}

export const toBeSorted = (
   container: HTMLCollectionOf<Element>,
   orderArr: string[],
   action: string,
   criteria?: string
) => {
   for (let i = 0; i < orderArr.length - 1; i++) {
      const numA = extractNumericValue(orderArr[i])
      const numB = extractNumericValue(orderArr[i + 1])

      if (action === "desc") {
         if (numA === null || numB === null || numA < numB) {
            return {
               pass: false,
               message: () => `
                  Criteria: ${criteria} \n
                  Expected: \x1b[31m${customSort(orderArr, action)}\x1b[0m
                  Received: ${orderArr} \n
               `,
            }
         }
      } else {
         if (numA === null || numB === null || numA > numB) {
            return {
               pass: false,
               message: () =>`
                  Criteria: ${criteria} \n
                  Expected: ${customSort(orderArr, action)}
                  Received: ${orderArr}\n
               `,
            }
         }
      }
   }

   return {
      pass: true,
      message: () => "Elements are sorted correctly",
   }
}