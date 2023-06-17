// ===============================drodownlist ===============================
// $("#citySelect")?.selectmenu({ icons: { button: "fa fa-angle-down" } })

$(document).ready(function () {
    // tooltip init
    if ($("#formAccountInformation")) {
        $('#formAccountInformation input').tooltipster({
            trigger: 'custom',
            onlyOne: false,
            position: 'top-left'
        });

        // form validate and submit
        accountInformationFormsubmit()
    }

    // if ($("#step2Form")) {
    //     $('#signInForm input').tooltipster({
    //         trigger: 'custom',
    //         onlyOne: false,
    //         position: 'top-left'
    //     });

    //     // form validate and submit
    //     // signInFormSubmit()
    // }


});


function accountInformationFormsubmit() {

    $.validator.addMethod("phoneRegex", function (value, element) {
        return this.optional(element) || /^\d{9,15}$/i.test(value);
    }, "Email Address is invalid: Please enter a valid email address.");

    $("#formAccountInformation").validate({
        errorPlacement: function (error, element) {
            $(element).tooltipster('update', $(error).text());
            $(element).tooltipster('show');
        },
        success: function (label, element) {
            $(element).tooltipster('hide');
        },
        rules: {
            fullName: {
                required: true,
            },
            Email: {
                required: true,
                email: true
            },

            CellPhone: {
                required: true,
                phoneRegex: true
            },

            Gender: {
                required: true,
            },
            dateBirth: {
                required: true,
            },
            nationality: {
                required: true,
            },



        },
        messages: {
            fullName: {
                required: " هذا الحقل مطلوب ",
            },
            Email: {
                required: " هذا الحقل مطلوب ",
                email: " البريد الكتروني غير صالح ",
            },
            id: {
                required: " هذا الحقل مطلوب ",
            },
            CellPhone: {
                required: " هذا الحقل مطلوب ",
                phoneRegex: " hpgnadasd ",
            },
            Gender: {
                required: " هذا الحقل مطلوب ",
            },
            dateBirth: {
                required: " مطلوب ",
            },
            nationality: {
                required: " مطلوب ",
            },
        },

        submitHandler: function (form) { // for demo
            if(form.checkValidity()) {
                // $('#step-1').click(function(){
                    $('#step2-tab').tab('show')
                //   });
            }
          
        }
    });
}