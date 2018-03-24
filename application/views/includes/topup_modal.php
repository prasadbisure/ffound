<div class="modal fade" id="topup-modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
            <h3 class="modal-title" id="lineModalLabel">Product Top-up</h3>
         </div>
         <form id="topup-form" class="topup-form" method="post" action="/site/topuppurchase">
            <div class="modal-body col-lg-12">
               <!-- content goes here -->
               <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-12">
                  <label style="font-size: 18px;">Add additional product slots:</label>
               </div>
               <div class="form-group col-xs-10 col-sm-5 col-md-5 col-lg-5">
                  <label for="exampleInputPassword1">Slots: </label>
                  <select class="form-control custom-select-modal pslot top-up-inputs"  placeholder="Product slot" name="pslot">
                     <option value="1">10 Products</option>
                     <option value="2">20 Products</option>
                     <option value="3">30 Products</option>
                     <option value="4">40 Products</option>
                     <option value="5">50 Products</option>
                  </select>
               </div>
               <div class="form-group col-xs-10 col-sm-5 col-md-5 col-lg-5">
                  <label for="price">Cost (INR):</label>
                  <input type="text" id="price" class="form-control top-up-inputs" name="price" value=500 disabled>
               </div>
            </div>
            <div class="modal-footer">
               <div class="btn-group btn-group-justified" role="group" aria-label="group button">
                  <div class="btn-group col-md-3" role="group">
                     <button type="button" class="btn btn-default submit-btn-style" data-dismiss="modal"  role="button">Cancle</button>
                  </div>
                  <div class="btn-group col-md-3" role="group">
                     <button type="submit" class="btn btn-default btn-hover-green submit-btn-style" data-action="save" role="button">Upgrade</button>
                  </div>
               </div>
            </div>
         </form>
      </div>
   </div>
</div>
