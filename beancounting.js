function countNs(str)
{
 var letter = 'N'
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++)
 {
    if (str.charAt(position) == letter)
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(countNs('Nagging Non interventioN'));

function countNs_custom(str,letter)
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++)
 {
    if (str.charAt(position) == letter)
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
console.log(countNs_custom('nagging ooo non  ooo intervention','o'));