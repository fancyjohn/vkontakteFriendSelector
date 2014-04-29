          var DashboardPage = Backbone.View.extend({
               el: '#container',
               render: function () {

                    var template = _.template($('#dashboard-template').html());
                    $("#container").html(template);
                    // по-умолчанию открыта вкладка перевод другу - заполняем её
                    var tab_template = _.template($('#choose-friend-template').html());
                    $('#tab-container').html(tab_template);

               },
               events: {
                    'click #choose-friend': 'chooseFriend',
                    'click .friend': 'selectFriend'
               },
               chooseFriend: function (ev) {
                    console.log("chooseFriend fired. That's good.");
                    showFriendsList();
               },
               selectFriend: function (ev) {
                    selectedId = $(ev.currentTarget).attr("vk_id");
                    selectedName = $(ev.currentTarget).find("span").html();
                    console.log(selectedId);
                    $("#friend_id").val(selectedId);
                    $("#choose-friend").html(selectedName);
                    $("#chooseFriendModal").modal('hide');
                    return false;
               }
          });