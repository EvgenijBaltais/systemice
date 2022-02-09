   $(function(){

         $('input[name="Phone"]').inputmask({"mask": "+7 (999) 999-99-99"});


         $('input[name="Phone"]').on('keyup', function(){

             $(this).css('border-color', '#C9C9C9');
         });

         $('input[name="Phone"]').focus(function(){

             $(this).css('border-color', '#C9C9C9');
         });

   $('.send-form-submit').on('click', function(e){

    e.preventDefault();

    var $this = $(this),
        form = $this.parents('form'),
        nameInput = form.find('input[name="Name"]'),
        uname = nameInput.val(),
        phoneInput = form.find('input[name="Phone"]'),
        phone = phoneInput.val(),
        emailInput = form.find('input[name="Email"]'),
        email = emailInput.val(),     
        u = $('body').attr('data-u'),
        patternEmail = /^(([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+\.)*([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+$/,
        phoneCorrect = phoneInput.inputmask("isComplete"),
        hotelName = 'systemice.ru/game (Игра Эмоциональный интеллект (EQ))',
        dopinfo,
        formName = '';
        
        dopinfo = '\n' + 'Заявка со страницы: ' + hotelName + '\n' + 'Имя:' + uname + '\n' + 'Телефон:' + phone + '\n' + 'E-mail:' + email + '\n';

    if ($this.hasClass('form-send')) {

        return false;
    }

    if (!phoneCorrect) {

        phoneInput.css('border-color', 'red');
        return false;
    }
  patternEmail.test(email) ? email : email = '';

      var formData = "name=" + uname + "&phone=" + phone + "&email=" + email + '&corp=' + 1 + '&hotel=' + hotelName + '&u=' + u + '&dopinfo=' + dopinfo;
      console.log(formData);
    $.ajax({
        type: "POST",
        url: 'http://marins-parkhotel.ru/scripts/bron_systemice.php',
        data: formData,
        beforeSend : function(){
            $this.addClass('form-send');
            $this.text('Отправка...');
        },
        success : function () {

            $this.addClass('form-send');
            $this.text('Успешно!');
            yaCounter24221908.reachGoal('game');
            gtag('event', 'goal_allgoal_1', {'event_category': 'goal_allgoal_'});
            gtag('event', 'game', {'event_category': 'game_'});

        },
        error : function () {

            $this.text('Ошибка!');

            setTimeout(function(){

                $this.removeClass('form-send');
                $this.text('Заказать');
            }, 3000);
        }
    });


         });
   });