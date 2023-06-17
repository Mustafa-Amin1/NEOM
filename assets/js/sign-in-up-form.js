//  navbar sticky
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#NavBar .logo').html('')
        $('#NavBar .logo').html('<img src="assets/images/logo-ar2.png" alt="">')
    } else {
        $('#NavBar .logo').html('')
        $('#NavBar .logo').html('<img src="assets/images/logo-dark.svg" alt="">')
    }
});

// ===============================drodownlist ===============================
$("#citySelect")?.selectmenu({ icons: { button: "fa fa-angle-down" } })

$(document).ready(function () {
    // tooltip init
    if ($("#signUpForm")) {
        $('#signUpForm input').tooltipster({
            trigger: 'custom',
            onlyOne: false,
            position: 'top-left'
        });

        // form validate and submit
        signUpFormSubmit()
    }

    if ($("#signInForm")) {
        $('#signInForm input').tooltipster({
            trigger: 'custom',
            onlyOne: false,
            position: 'top-left'
        });

        // form validate and submit
        signInFormSubmit()
    }

    if ($("#forgetPassForm")) {
        $('#forgetPassForm input').tooltipster({
            trigger: 'custom',
            onlyOne: false,
            position: 'top-left'
        });

        // form validate and submit
        forgetPassFormSubmit()
    }



});


function signInFormSubmit() {

    $("#signInForm").validate({
        errorPlacement: function (error, element) {
            $(element).tooltipster('update', $(error).text());
            $(element).tooltipster('show');
        },
        success: function (label, element) {
            $(element).tooltipster('hide');
        },
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
            },
        },
        messages: {
            email: {
                required: " هذا الحقل مطلوب ",
                email: " البريد الكتروني غير صالح ",
            },
            password: {
                required: " هذا الحقل مطلوب ",
            },
        },

        submitHandler: function (form) { // for demo
            console.log(form)
            console.log(form.valid)
            console.log(form.isValid)
            console.log(form.checkValidity())
        }
    });
}

function signUpFormSubmit() {
    $.validator.addMethod(
        "phone-regex",
        function (value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );
    $.validator.addMethod("phoneRegex", function (value, element) {
        return this.optional(element) || /^\d{9,15}$/i.test(value);
    }, "Email Address is invalid: Please enter a valid email address.");

    $("#signUpForm").validate({
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
            email: {
                required: true,
                email: true
            },
            id: {
                required: true,
            },
            CellPhone: {
                required: true,
                phoneRegex: true
            },

            citySelect: {
                required: true,
            },
            theday: {
                required: true,
            },
            month: {
                required: true,
            },
            year: {
                required: true,
            },
            password: {
                // required: true,
            },
            confirmPassword: {
                // required: true,
                equalTo: "#password"
            },

        },
        messages: {
            fullName: {
                required: " هذا الحقل مطلوب ",
            },
            email: {
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
            citySelect: {
                required: " هذا الحقل مطلوب ",
            },
            theday: {
                required: " مطلوب ",
                minlength: " الحد الادنى المطلوب {0}. ",
                maxlength: " الحد الاقصى المطلوب {0}. ",
                number: " ادخل ارقام"
            },
            month: {
                required: " مطلوب ",
                minlength: " الحد الادنى المطلوب {0}. ",
                maxlength: " الحد الاقصى المطلوب {0}. ",
                number: " ادخل ارقام"
            },
            year: {
                required: " مطلوب ",
                number: " ادخل ارقام"
            },
            password: {
                required: " هذا الحقل مطلوب ",
            },
            confirmPassword: {
                // required: " هذا الحقل مطلوب ",
                equalTo: " كلمة المرور غير مطابقة "
            },


        },

        submitHandler: function (form) { // for demo
            console.log(form.checkValidity)
        }
    });
}

function forgetPassFormSubmit() {
    $("#forgetPassForm").validate({
        errorPlacement: function (error, element) {
            $(element).tooltipster('update', $(error).text());
            $(element).tooltipster('show');
        },
        success: function (label, element) {
            $(element).tooltipster('hide');
        },
        rules: {
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            email: {
                required: " هذا الحقل مطلوب ",
                email: " البريد الكتروني غير صالح ",
            },
        },

        submitHandler: function (form) { // for demo
            alert('valid form');
            return false;
        }
    });
}




