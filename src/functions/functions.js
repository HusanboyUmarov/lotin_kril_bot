
const lotin_kril = (str)=>{
    return str.replace('oʻ', 'ў').replace('Oʻ', 'Ў')
    .replace(/ya|yA/g, 'я').replace(/Ya|YA/g, 'Я')
    .replace(/oʻ/g, 'ў').replace(/Oʻ/g, 'Ў')
    .replace(/yo'|yo|yO'|yO/g, 'ё').replace(/Yo'|Yo|YO'|YO/g, 'Ё')
    .replace(/ye|yE|e/g, 'е').replace(/YE|Ye|E/g, 'Е')
    .replace(/o'/g, 'ў').replace(/O'/g, 'Ў')
    .replace(/g'/g, 'ғ').replace(/G'/g, 'Ғ')
    
    .replace(/sh|sH/g, 'ш').replace(/SH|Sh/g, 'Ш')
    .replace(/ch|cH/g, 'ч').replace(/CH|Ch/g, 'Ч')
    .replace(/yu|yU/g, 'ю').replace(/Yu|YU/g, 'Ю')
    .replace(/a/g, 'а').replace(/A/g, 'А')
    .replace(/b/g, 'б').replace(/B/g, 'Б')
    .replace(/d/g, 'д').replace(/D/g, 'Д')
    .replace(/f/g, 'ф').replace(/F/g, 'Ф')
    .replace(/g/g, 'г').replace(/G/g, 'Г')
    .replace(/h/g, 'ҳ').replace(/H/g, 'Ҳ')
    .replace(/i/g, 'и').replace(/I/g, 'И')
    .replace(/j/g, 'ж').replace(/J/g, 'Ж')
    .replace(/k/g, 'к').replace(/K/g, 'К')
    .replace(/l/g, 'л').replace(/L/g, 'Л')
    .replace(/m/g, 'м').replace(/M/g, 'М')
    .replace(/n/g, 'н').replace(/N/g, 'Н')
    .replace(/o/g, 'о').replace(/O/g, 'О')
    .replace(/p/g, 'п').replace(/P/g, 'П')
    .replace(/q/g, 'қ').replace(/Q/g, 'Қ')
    .replace(/r/g, 'р').replace(/R/g, 'Р')
    .replace(/s/g, 'с').replace(/S/g, 'С')
    .replace(/t/g, 'т').replace(/T/g, 'Т')
    .replace(/u/g, 'у').replace(/U/g, 'У')
    .replace(/v/g, 'в').replace(/V/g, 'В')
    .replace(/x/g, 'х').replace(/X/g, 'Х')
    .replace(/y/g, 'й').replace(/Y/g, 'Й')
    .replace(/z/g, 'з').replace(/Z/g, 'З')
    
    
    .replace(/'/g, 'ъ');
};
const kril_lotin = (str)=>{
    return str
    .replace(/Ы/g, 'i').replace(/ы/g, 'i')
    .replace(/я/g, 'ya').replace(/Я/g, 'Ya')
    .replace(/ё/g, 'yo').replace(/Ё/g, 'Yo')
    .replace(/е/g, 'e').replace(/Е/g, 'E')
    .replace(/ў/g, "o'").replace(/Ў/g, "O'")
    .replace(/ғ/g, "g'").replace(/Ғ/g, "G'")
    .replace(/ш/g, 'sh').replace(/Ш/g, 'Sh')
    .replace(/щ/g, 'sh').replace(/Щ/g, 'Sh')
    .replace(/ч/g, 'ch').replace(/Ч/g, 'Ch')
    .replace(/ю/g, 'yu').replace(/Ю/g, 'Yu')
    .replace(/э/g, 'e').replace(/Э/g, 'E')
    .replace(/а/g, 'a').replace(/А/g, 'A')
    .replace(/б/g, 'b').replace(/Б/g, 'B')
    .replace(/д/g, 'd').replace(/Д/g, 'D')
    .replace(/е/g, 'e').replace(/Е/g, 'E')
    .replace(/ф/g, 'f').replace(/Ф/g, 'F')
    .replace(/г/g, 'g').replace(/Г/g, 'G')
    .replace(/ҳ/g, 'h').replace(/Ҳ/g, 'H')
    .replace(/и/g, 'i').replace(/И/g, 'I')
    .replace(/ж/g, 'j').replace(/Ж/g, 'J')
    .replace(/к/g, 'k').replace(/К/g, 'K')
    .replace(/л/g, 'l').replace(/Л/g, 'L')
    .replace(/м/g, 'm').replace(/М/g, 'M')
    .replace(/н/g, 'n').replace(/Н/g, 'N')
    .replace(/о/g, 'o').replace(/О/g, 'O')
    .replace(/п/g, 'p').replace(/П/g, 'P')
    .replace(/қ/g, 'q').replace(/Қ/g, 'Q')
    .replace(/р/g, 'r').replace(/Р/g, 'R')
    .replace(/с/g, 's').replace(/С/g, 'S')
    .replace(/т/g, 't').replace(/Т/g, 'T')
    .replace(/у/g, 'u').replace(/У/g, 'U')
    .replace(/в/g, 'v').replace(/В/g, 'V')
    .replace(/х/g, 'x').replace(/Х/g, 'X')
    .replace(/й/g, 'y').replace(/Й/g, 'Y')
    .replace(/з/g, 'z').replace(/З/g, 'Z')
    .replace(/ъ/g, "'").replace(/Ъ/g, "'")
    .replace(/ц/g, 's').replace(/Ц/g, 'Ts')
    .replace(/Ь/g, '').replace(/ь/g, '')
};

const check_words = (str = '') =>{
   
    for(let i = 1; i< str.length; i++){
      if((str[i-1] + str[i] == 'sh') || (str[i-1] + str[i] == 'sH'))
      str = str.replace(str[i-1] + str[i], 'щ')
      else{
        if((str[i-1] + str[i] == 'Sh') || (str[i-1] + str[i] == 'SH'))
        str = str.replace(str[i-1] + str[i], 'Щ')
      }
      
      if((str[i-1] + str[i] == 'ch') || (str[i-1] + str[i] == 'cH'))
      str = str.replace(str[i-1] + str[i], 'ч')
      else{
        if((str[i-1] + str[i] == 'Ch') || (str[i-1] + str[i] == 'CH'))
        str = str.replace(str[i-1] + str[i], 'Ч')
      }

      if((str[i-1] + str[i] == "o'") || (str[i-1] + str[i] == 'o`') || (str[i-1] + str[i] == 'оʻ') || (str[i-1] + str[i] == 'o‘'))
      str = str.replace(str[i-1] + str[i], 'ў')
      else{
        if( (str[i-1] + str[i] == "O'") || (str[i-1] + str[i] == 'O`') || (str[i-1] + str[i] == 'Oʻ') || (str[i-1] + str[i] == 'O‘'))
        str = str.replace(str[i-1] + str[i], 'Ў')
      }
     

      if((str[i-1] + str[i] == "g'") || (str[i-1] + str[i] == 'g`') || (str[i-1] + str[i] == 'gʻ'))
      str = str.replace(str[i-1] + str[i], 'ғ')
      else{
        if( (str[i-1] + str[i] == "G'") || (str[i-1] + str[i] == 'G`') || (str[i-1] + str[i] == 'Gʻ'))
        str = str.replace(str[i-1] + str[i], 'Ғ')
      }
    }
    return str;
}

const translater =(matn)=>{
 let str= ''
let count = 0

for(let i = 0; i< matn.length ; i++)
if(
    (matn[i].charCodeAt() >= 65 && matn[i].charCodeAt() <= 90)
    ||
    (matn[i].charCodeAt() >= 97 && matn[i].charCodeAt() <= 122)
  )

 count++
const boolean = count>= matn.length - count

if(boolean)
{
 matn = check_words(matn)
}

if(boolean)
 {
     for(let i = 0; i< matn.length ; i++)
       str+= lotin_kril(matn[i])
 }
 else
 {
     for (let i = 0; i< matn.length ; i++){
         str+= kril_lotin(matn[i])
     }
 }

return str
} 

module.exports = {lotin_kril, kril_lotin, check_words, translater};