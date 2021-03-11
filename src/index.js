module.exports = function toReadable (number) {
    const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ']
    const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    const regex = /^(\d{1})(\d{2})(\d{1})(\d{2})$/;

    const before20 = (n) => a[Number(n)];
    const after20 = (n) => b[n[0]] + ' ' + a[n[1]];

      if (isNaN(number)) return '';
      if (number === 0) return 'zero';

      const numStr = number.toString();

      const [, n1, n2, n3, n4] = ('000000' + numStr).substr(-6).match(regex);

      let str = ''

      str += n1 != 0 ? before20(n1) + 'hundred ' : ''

      str += n2 != 0 ? (before20(n2) || after20(n2)) + 'thousand ' : ''

      str += n3 != 0 ? before20(n3) + 'hundred ' : ''

      str += n4 != 0 ? (before20(n4) || after20(n4)) : ''


      return(str.trim());

}
