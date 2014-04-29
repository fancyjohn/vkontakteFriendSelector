function showFriendsList() {
     console.log($("#friends-list ul").length);
     if ($("#friends-list ul").length < 2) {
          VK.api('friends.get', {
               fields: 'photo',
               // count: 10,
               order: 'hints'
          }, function(data) {
               if (data.error) {
                    console.log(data.error.error_msg, false);
                    // у нас нет прав на просмотр друзей - запросить права
                    VK.callMethod("showSettingsBox",2);
                    VK.addCallback("onSettingsChanged", showFriendsList); // после получения прав показать список друзей
               } else {
                    console.log(data);
                    if (data.response.items.length > 0) 
                    {
                         // очищаем список друзей - TODO: можно повторно не заполнять
                         for (i=0;i<data.response.items.length;i++)
                         {
                              var friend = data.response.items[i];
                              if (friend.photo)
                              {
                                   console.log("Adding " + friend.first_name + " " + friend.last_name);
                                   $("#friends-list ul")
                                        .append('<a class="friend" href="http://vk.com/id'+friend.id+'" target="_blank" vk_id="'+friend.id+'"><li class="list-group-item"><img src="'+friend.photo+'" /><span>'+friend.first_name+' '+friend.last_name+'</span></li></a>');
                              }
                         } 
                    }
               }
          });
     }
     // сразу показываем диалоговое окно выбора друга
     // TODO: спиннер пока друзья не подгрузились
     $("#friends-list").show();
}