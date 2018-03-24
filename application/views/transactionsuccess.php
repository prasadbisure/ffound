<script>
setTimeout(function(){
              window.location.href="login-register?referer=profile";            
          }, 3000);

</script>

<?php

	
	echo "<section id='contact' class='content-section text-center contact-us-margin'><div class='contact-section'><div style='margin-top:240px;'>";
	//echo "<center>";

	

	if($order_status==="Success")
	{
		echo "<p style='font-size: 40px;'> Thank you for shopping with us.</p>";
		echo "<p style='font-size: 40px;'>Your transaction is successful.</p>";
	}
	else if($order_status==="Aborted")
	{
		echo "<p style='font-size: 40px;'>Thank you for shopping with us.We will keep you posted regarding the status of your order through e-mail</p>";
	
	}
	else if($order_status==="Failure")
	{
		echo "<p style='font-size: 40px;'>Thank you for shopping with us.However,the transaction has been declined.</p>";
	}
	else
	{
		echo "<p style='font-size: 40px;'>Security Error. Illegal access detected</p>";
	
	}
	
	echo "</div></div></section>";
?>

<!--<section id="contact" class="content-section text-center contact-us-margin">
    <div class="contact-section">
    	<div style="margin-top:240px;">
    		<p style="font-size: 40px;">Your transaction is successful!</p>
    		<p style="font-size: 40px;">Thank you business with us.</p>
    	</div>
    </div>
</section> -->
