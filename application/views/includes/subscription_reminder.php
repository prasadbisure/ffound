<div class="modal fade" id="reminder-modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
            <h3 class="modal-title" id="lineModalLabel">Subscription Reminder Alert</h3>
         </div>
         <form id="topup-form" class="topup-form" method="post" action="/site/topuppurchase">
            <div class="modal-body col-lg-12">
               <!-- content goes here -->
               <div class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12" style="text-align: center;">
                  <label style="font-size: 18px;">Your subscription will expire soon.</label>
               </div>
            </div>
            <div class="modal-footer">
               <div class="btn-group btn-group-justified" role="group" aria-label="group button" style="text-align: center;margin-left: 40%;">
                  <div class="btn-group col-offset-md-3 col-md-3" role="group">
                     <button type="button" class="btn btn-default submit-btn-style" data-dismiss="modal"  role="button" style="width: 18%;">Ok</button>
                  </div>
               </div>
            </div>
         </form>
      </div>
   </div>
</div>
