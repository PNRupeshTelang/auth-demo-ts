
export const isUpperCaseChar = (c) => (c >= 'A') && (c <= 'Z');
export const isLowerCaseChar = (c) => (c >= 'a') && (c <= 'z');
export const isNumberChar = (c) => (c >= '0') && (c <= '9');

export const getProperCaseWithSeparator = (str: string, separator: string) => {
    var strings = []
    var properCase = str.replace(/(\w)(\w*)/g,
        function (_, i, r) {
            return i.toUpperCase() + (r != null ? r : "");
        }
    );

    var startIndex = 0;
    var endIndex = 0;
    for (let i = 0; i < properCase.length; i++) {

        if (isUpperCaseChar(properCase.charAt(i))) {
            startIndex = i;
            for (let j = i; j < properCase.length && !isUpperCaseChar(properCase.charAt(j)); j++) {
                i++;
                endIndex = j;
            }

            strings.push(properCase.substring(startIndex, endIndex));
        }
    }

    strings.push(properCase.substring(startIndex))

    console.log(strings.join(separator));

    return strings.join(separator);
}

export const getProperCaseWithSpace = (str: string) => getProperCaseWithSeparator(str, ' ');
export const getProperCaseWithDash = (str: string) => getProperCaseWithSeparator(str, '-');
export const getProperCaseWithUnderscore = (str: string) => getProperCaseWithSeparator(str, '_');
