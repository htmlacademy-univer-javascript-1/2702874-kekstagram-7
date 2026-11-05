// Проверяет, что длина строки не превышает максимально допустимую
const isStringLengthValid = (string, maxLength) => string.length <= maxLength;

// Проверяет, является ли строка палиндромом (пробелы и регистр не учитываются)
const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }

  return reversedString === normalizedString;
};

// Извлекает из строки (или числа) все цифры и возвращает их в виде целого числа
const extractDigits = (value) => {
  const string = value.toString();
  let digits = '';

  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      digits += string[i];
    }
  }

  return digits === '' ? NaN : parseInt(digits, 10);
};

// Проверяет, укладывается ли встреча в рамки рабочего дня
const isMeetingWithinWorkDay = (workDayStart, workDayEnd, meetingStart, meetingDuration) => {
  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);

    return hours * 60 + minutes;
  };

  const workDayStartInMinutes = timeToMinutes(workDayStart);
  const workDayEndInMinutes = timeToMinutes(workDayEnd);
  const meetingStartInMinutes = timeToMinutes(meetingStart);

  return meetingStartInMinutes >= workDayStartInMinutes
    && meetingStartInMinutes + meetingDuration <= workDayEndInMinutes;
};

// Примеры вызова функций для самопроверки:
void isStringLengthValid('проверяемая строка', 20); // true
void isPalindrome('Лёша на полке клопа нашёл'); // true
void extractDigits('1 кефир, 0.5 батона'); // 105
void isMeetingWithinWorkDay('08:00', '17:30', '14:00', 90); // true
