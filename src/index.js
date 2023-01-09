const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const secondTenth = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
               'sixteen', 'seventeen', 'eighteen', 'nineteen'];

module.exports = function toReadable (number) {

    let result = '';

    const hundredsPposition = Math.trunc(number / 100);
    const tensPosition = Math.trunc((number - hundredsPposition * 100) / 10);
    const unitPosition = (number - hundredsPposition * 100) % 10;

    const digitsNumber = number.toString().split('').length;
    switch (digitsNumber) {
        case 3:
            result += `${digits[hundredsPposition]} hundred` + `${(tensPosition || unitPosition) > 0 ? ' ': ''}`;
        case 2:
            if (tensPosition === 1) {
                result += `${secondTenth[unitPosition]}`;
                break;
            }
            else if (tensPosition >= 2) {
                result += `${tens[tensPosition - 2]}` + `${unitPosition > 0 ? ' ': ''}`;               
            }

        case 1:
            result += `${digitsNumber > 1 &&  unitPosition === 0 ? '' : digits[unitPosition]}`;
            
    }

    return result;
};





