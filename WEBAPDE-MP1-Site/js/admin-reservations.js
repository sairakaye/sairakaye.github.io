var Reservation = function(mail) {
    this.mail = mail;
    this.status = false;
}

var reservations = []

reservations.push(new Reservation('jdc@dlsu.edu.ph'));
reservations.push(new Reservation('mar_reyes@dlsu.edu.ph'));
reservations.push(new Reservation('marie_care@dlsu.edu.ph'));
reservations.push(new Reservation('mars_bruno@dlsu.edu.ph'));
reservations.push(new Reservation('brendan_fax@dlsu.edu.ph'));

$(".clickable").on("click", function() {
    var flag = false;

    if ($(this).hasClass('clicked'))
        $(this).removeClass('clicked')
    else
        $(this).addClass('clicked')

    var target = $(this).find('td:first').text()
    for(var i = 0; i < reservations.length; i++) {
        if(reservations[i].mail == target) {

            if(reservations[i].status) {
                reservations[i].status = false;
                document.getElementById("reserve").innerHTML = "Cancel Reservation";
            }
            else {
                reservations[i].status = true;
                $(this).css('backgroundColor', '#FFFFFF');
                document.getElementById("reserve").innerHTML = "Cancel Reservation";
            }
        }
    }

    for(var i = 0; i < reservations.length; i++) {
        if(reservations[i].status) {
            flag = true;
            break;
        }
    }

    if(flag)
        $("#cancel").css('backgroundColor', 'white');
    else
        $("#cancel").css('backgroundColor', '#121212');
});

$("#cancel").on('click', function() {
    $('.clicked').remove();
})