<!-- BEGIN TEMPLATE -->
<script type="text/template" id="choose-friend-template">

<div class="form-body">
     
     <button id="choose-friend" class="btn btn-link" data-toggle="modal" data-target="#chooseFriendModal">выбрать</button>
     <input type="hidden" id="friend_id" />

</div>

<!-- BEGIN CHOOSE FRIEND MODAL -->
<div class="modal fade" id="chooseFriendModal" tabindex="-1" role="dialog" aria-labelledby="ChooseFriend" aria-hidden="true">
     <div class="modal-dialog">
          <div class="modal-content">
               <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="chooseFriendModalTitle">Кому?</h4>
               </div>
               <div class="modal-body" id="friends-list" style="height:400px;overflow-y:auto">
                    <ul class="list-group">
                    </ul>
               </div>
               <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Выбрать</button>
               </div>
          </div>
     </div>
</div>
<!-- END CHOOSE FRIEND MODAL -->

</script>
<!-- END TEMPLATE -->