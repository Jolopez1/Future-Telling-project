$("button").click(function(){
    var name=$(".bad").val();
    var age=$(".age").val();
    var life=$(".lifespand").val();
    var breath=8409600;
    $(".answer").text("Hello "+name+" you are "+age+" nice job on living so long."+" This means you have breathed about "+age*breath+" times. Since the aveage lifespand for your time is "+life+" years old. Then you have breathed "+age*breath+" times out of "+life*breath+" possible breaths in your life or about "+(age*breath)/(life*breath)*100+"% of the breathes you will breath in your lifetime.");
    
    
});