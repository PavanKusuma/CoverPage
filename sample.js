// https://unpkg.com/emoji.json@12.1.0/emoji.json
var key;
const fetchEmojiUnicodes = () => {
    let emojiUnicodeList = [];
  
      fetch("https://unpkg.com/emoji.json@12.1.0/emoji.json")
      .then(res => res.json())
      .then((emojiList) => {
          emojiUnicodeList = emojiList;
         
          // emojiList.forEach(emoji => {
          //   console.log(emoji.category.substr(0, emoji.category.indexOf('(')).trim());
          // });
          // emojiUnicodeList = _.groupBy(emojiList, (emoji) => {
          //     return emoji.category.substr(0, emoji.category.indexOf('(')).trim();
          // });
  
          const grouped = groupBy(emojiList, emoji => emoji.category.substr(0, emoji.category.indexOf('(')).trim());
  
          console.log(grouped.get("People & Body")[0]);
          console.log(grouped.get("People & Body")[0].char);
          key = grouped.get("People & Body")[0].char;
          
          var i = 0;
          grouped.forEach(group => {
            // console.log(group.char);
            
            if(i < 20){
              console.log(group[0].char);
              
              document.getElementById('emojis').innerHTML = document.getElementById('emojis').innerHTML + '<label class="tab-link" data-tab="' + group[0].char +'">' + group[0].char + '</label>';
              i ++ ;
            }
              
          });
          
          // Adding appropriate category tabs
          // for (const key in emojiUnicodeList) {
          //     $('#tab-list').append('<li class="tab-link" data-tab="' + key +'">' + key + '</li>');
          // }
          // $('.tab-link').eq(0).click();
  
      })
      .catch((e) => {
          console.log('There was an issue while fetching the emoji list'+e.message);
          document.getElementById('emoji-container').setAttribute('style', 'display:none');
          document.getElementById('error').setAttribute('style', 'display:flex');
      });
  }
  
  function groupBy(list, keyGetter) {
      const map = new Map();
      list.forEach((item) => {
           const key = keyGetter(item);
           const collection = map.get(key);
           if (!collection) {
               map.set(key, [item]);
           } else {
               collection.push(item);
           }
      });
      return map;
  }
