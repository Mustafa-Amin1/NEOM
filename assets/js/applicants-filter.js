
//  ===============================animation code ===============================
(function ($) {
    "use strict";
    var config = {
        reset: false,
        move: "40px",
        mobile: false,
    };
    window.sr = new scrollReveal(config);
})();

//  navbar sticky
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {
//       $('#NavBar').addClass('sticky').animate(5000)
//     } else {
//       $('#NavBar').removeClass('sticky').animate(5000)
//     }
//   });
//  ===============================animation code ===============================

//  applicants arr
let applicantsData = [
    {
        id: 1,
        name: ' محمود مصطفى',
        email: 'm.youssef@wten.com.sa',
        phone: '1515164411551',
        nationality: 'سعودي',
        birth_date: '02/02/1994 ',
        city: 'السعودية',
        qualification: 'محاسب ',
        bio: 'أنا محمود, متميز في تصميم واجهات المواقع و التطبيقات وتصميم ايضا تجربة المستخدم لكل تصميم لكي يناس',
        CV: 'assets/images/sample.pdf',
        video_url: 'https://www.youtube.com/watch?v=V6LAVmuL3WU',
        gender: 'ذكر',
        start_date: '2015',
        end_date: '2015',
        degree: '150',
        experience_level: 'متوسط',
        it_skills: 'متوسط',
        expec_salary: '5000',
        languages: ['العربية', 'الانجليزية'],
    },
    {
        id: 2,
        name: 'أحمد عبد الرحمن ',
        email: 'm.youssef@wten.com.sa',
        phone: '1515164411551',
        nationality: 'سعودي',
        birth_date: '02/02/1994 ',
        city: 'السعودية',
        qualification: 'محاسب ',
        bio: 'أنا محمود, متميز في تصميم واجهات المواقع و التطبيقات وتصميم ايضا تجربة المستخدم لكل تصميم لكي يناس',
        CV: 'assets/images/sample.pdf',
        video_url: 'https://www.youtube.com/watch?v=V6LAVmuL3WU',
        gender: 'ذكر',
        start_date: '2015',
        end_date: '2015',
        degree: '150',
        experience_level: 'متوسط',
        it_skills: 'متوسط',
        expec_salary: '5000',
        languages: ['العربية', 'الانجليزية'],
    },
    {
        id: 3,
        name: 'محمود مصطفى ',
        email: 'm.youssef@wten.com.sa',
        phone: '1515164411551',
        nationality: 'سعودي',
        birth_date: '02/02/1994 ',
        city: 'السعودية',
        qualification: 'محاسب ',
        bio: 'أنا محمود, متميز في تصميم واجهات المواقع و التطبيقات وتصميم ايضا تجربة المستخدم لكل تصميم لكي يناس',
        CV: 'assets/images/sample.pdf',
        video_url: 'https://www.youtube.com/watch?v=V6LAVmuL3WU',
        gender: 'ذكر',
        start_date: '2015',
        end_date: '2015',
        degree: '150',
        experience_level: 'متوسط',
        it_skills: 'متوسط',
        expec_salary: '5000',
        languages: ['العربية', 'الانجليزية']
    },
    {
        id: 4,
        name: 'أحمد عبد الرحمن ',
        email: 'm.youssef@wten.com.sa',
        phone: '1515164411551',
        nationality: 'سعودي',
        birth_date: '02/02/1994 ',
        city: 'السعودية',
        qualification: 'محاسب ',
        bio: 'أنا محمود, متميز في تصميم واجهات المواقع و التطبيقات وتصميم ايضا تجربة المستخدم لكل تصميم لكي يناس',
        CV: 'assets/images/sample.pdf',
        video_url: 'https://www.youtube.com/watch?v=V6LAVmuL3WU',
        gender: 'ذكر',
        start_date: '2015',
        end_date: '2015',
        degree: '150',
        experience_level: 'متوسط',
        it_skills: 'متوسط',
        expec_salary: '5000',
        languages: ['العربية', 'الانجليزية']
    },
    {
        id: 5,
        name: 'محمود مصطفى ',
        email: 'm.youssef@wten.com.sa',
        phone: '1515164411551',
        nationality: 'سعودي',
        birth_date: '02/02/1994 ',
        city: 'السعودية',
        qualification: 'محاسب ',
        bio: 'أنا محمود, متميز في تصميم واجهات المواقع و التطبيقات وتصميم ايضا تجربة المستخدم لكل تصميم لكي يناس',
        CV: 'assets/images/sample.pdf',
        video_url: 'https://www.youtube.com/watch?v=V6LAVmuL3WU',
        gender: 'ذكر',
        start_date: '2015',
        end_date: '2015',
        degree: '150',
        experience_level: 'متوسط',
        it_skills: 'متوسط',
        expec_salary: '5000',
        languages: ['العربية', 'الانجليزية']
    },
    {
        id: 6,
        name: 'أحمد عبد الرحمن ',
        email: 'm.youssef@wten.com.sa',
        phone: '1515164411551',
        nationality: 'سعودي',
        birth_date: '02/02/1994 ',
        city: 'السعودية',
        qualification: 'محاسب ',
        bio: 'أنا محمود, متميز في تصميم واجهات المواقع و التطبيقات وتصميم ايضا تجربة المستخدم لكل تصميم لكي يناس',
        CV: 'assets/images/sample.pdf',
        video_url: 'https://www.youtube.com/watch?v=V6LAVmuL3WU',
        gender: 'ذكر',
        start_date: '2015',
        end_date: '2015',
        degree: '150',
        experience_level: 'متوسط',
        it_skills: 'متوسط',
        expec_salary: '5000',
        languages: ['العربية', 'الانجليزية']
    },
    {
        id: 7,
        name: 'يسرا منصور ',
        email: 'm.youssef@wten.com.sa',
        phone: '1515164411551',
        nationality: 'سعودي',
        birth_date: '02/02/1994 ',
        city: 'السعودية',
        qualification: 'محاسب ',
        bio: 'أنا محمود, متميز في تصميم واجهات المواقع و التطبيقات وتصميم ايضا تجربة المستخدم لكل تصميم لكي يناس',
        CV: 'assets/images/sample.pdf',
        video_url: 'https://www.youtube.com/watch?v=V6LAVmuL3WU',
        gender: 'ذكر',
        start_date: '2015',
        end_date: '2015',
        degree: '150',
        experience_level: 'متوسط',
        it_skills: 'متوسط',
        expec_salary: '5000',
        languages: ['العربية', 'الانجليزية']
    },

]


$(document).ready(function () {

    //  ===============================start counter in hero ===============================
    var a = 0;
    $(window).ready(function () {
        var oTop = $("#counter-box").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $(".counter").each(function () {
                var $this = $(this),
                    countTo = $this.attr("data-number");
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                    {
                        duration: 6050,
                        easing: "swing",
                        step: function () {
                            $this.text(
                                Math.ceil(this.countNum).toLocaleString("en")
                            );
                        },
                        complete: function () {
                            $this.text(
                                Math.ceil(this.countNum).toLocaleString("en")
                            );
                        }
                    }
                );
            });
            a = 1;
        }
    });
    //  ===============================end counter in hero ===============================

    // ===============================start date picker =====================
    $('.ui-datepicker-next').html(`
    <span class="ui-icon ui-icon-circle-triangle-e" >
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
    </span>
    `)
    
    $("#datepicker_from").datepicker({
        inline: true,
        prevText: "",
        nextText: "",
        dateFormat: "yy/mm/dd"
    }).next('.ui-datepicker-next').html(`
    <span class="ui-icon ui-icon-circle-triangle-e" >
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
    </span>
    `);
    $("#datepicker_to").datepicker({
        inline: true
    });
    // ===============================end date picker =====================

    // ===============================drodownlist ===============================
    $("#status")?.selectmenu({ icons: { button: "fa fa-angle-down" } })
    $("#education")?.selectmenu({ icons: { button: "fa fa-angle-down" } })

    //  check all

    function showSelectedActions(isShow) {
        if (isShow) {
            $('.filter-actions .actions').fadeIn(300)
            $('.filter-actions .actions').addClass('d-flex').removeClass('d-block')
        } else {
            $('.filter-actions .actions').fadeOut(100)
            $('.filter-actions .actions').removeClass('d-flex')
        }
    }
    // =============================== start check all change===============================
    let checkedApplicants = []
    let applicantCheckbox = $('input.applicant-check')
    $("#checkAll").change(function () {
        let checkallInput = $(this).find('input.applicant-check')[0]
        applicantCheckbox.not(this).prop('checked', checkallInput.checked);
        if (checkallInput.checked) {
            checkedApplicants = applicantsData
            showSelectedActions(true)
        } else {
            checkedApplicants = []
            showSelectedActions(false)
        }
    });
    // =============================== end check all change ===============================

    // =============================== start applicant checkbox change ===============================

    $('.applicant-check').change(function () {
        let checkAllCheckbox = $("#checkAll").find('input.applicant-check')[0]
        //in case applicant not checked
        if (this.checked == false) {
            checkAllCheckbox.checked = false
            //remove unchecked from applicants Arr
            let applicantIndex = Number($(this).attr('data-index'))
            checkedApplicants.splice(applicantIndex, 1)

        } else {
            //in case applicant checked 
            let checkboxesArr = Array.from($('.applicant-check'))
            checkedApplicants = []
            checkboxesArr.forEach((element, index) => {
                if (index != 0 && element.checked) {
                    checkedApplicants.push(element)
                }
            });

            //compare checked Arr length with checkboxed length
            if (checkedApplicants.length == checkboxesArr.length - 1) {
                checkAllCheckbox.checked = true
            }
        }

        // handling select actions
        if (checkedApplicants.length > 0) {
            showSelectedActions(true)
        } else {
            showSelectedActions(false)
        }

    });

    // ===============================end applicant checkbox change===============================


    // ===========================start applicant details modal ===========================

    //get clicked applicant index
    let currentApplicantIndex = 1
    // let applicantModalSelectors = [ $(".details-btn"), $(".applicant-name")]
    // applicantModalSelectors.forEach(element => {
    //     element.click(function () {
    //         currentApplicantIndex = Number($(this).parent().attr('data-index'))

    //         renderApplicantData(currentApplicantIndex)
    //         handleDisabledNavigations(currentApplicantIndex)
    //     })
    // })


    // ===========================end applicant details modal ===========================

})

// ===========================start applicant details modal functions===========================

function renderApplicantData(applicantIndex) {
    let currentApplicant = applicantsData[applicantIndex]
    if (currentApplicant)
        // open modal
        $('#applicantDetailsModal').modal({ show: true, backdrop: 'static', keyboard: false });
    //reset content
    // $('#applicant-modal').html('')
    //rendering
    // $('#applicant-modal').html(`
    //     <button type="button" class="close colse-modal-btn position-absolute top-0 right-0" data-dismiss="modal" aria-label="Close">
    //         <img src="assets/images/icons/ic_close.svg" />
    //         </button>
    //     <div class="applicant-modal position-relative">
    //         <div class="applicant m-0 px-3 border-0 shadow-none ">
    //             <button id="prevApplicant" class="bg-transparent arrow-btn prev-btn position-absolute"
    //                 onClick="getPrevApplicant(${applicantIndex})">
    //                 <svg xmlns="http://www.w3.org/2000/svg" height="25" width="24"
    //                     viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    //                     <path
    //                         d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
    //                 </svg>
    //             </button>
    //             <button id="nextApplicant" class="bg-transparent arrow-btn next-btn position-absolute"
    //                 onClick="getNextApplicant(${applicantIndex})">
    //                 <svg xmlns="http://www.w3.org/2000/svg" height="25" width="24"
    //                     viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    //                     <path
    //                         d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
    //                 </svg>
    //             </button>
    //             <div class="imagee"><img src="assets/images/user4.jpg" alt=""></div>
    //             <h4>${currentApplicant.name}</h4>
    //                 <div class="contact">
    //                     <a href = "mailto: ${currentApplicant.email}">${currentApplicant.email}<img src="assets/images/icons/envelope1.svg" alt="" class="ml-2">
    //                     </a>
    //                     <a href="tel:${currentApplicant.phone}">${currentApplicant.phone}<img src="assets/images/icons/phone.svg" alt="" class="ml-2"></a>
    //                 </div>
    //             <div class="w-100 container-fluid p-0 ">
    //                 <div class="info odd w-100 m-0 row justify-content-center align-items-cneter">
    //                     <p class="col-6">الجنسية: <span>${currentApplicant.nationality}</span></p>
    //                     <p class="col-6">تاريخ الميلاد: <span> ${currentApplicant.birth_date}</span></p>
    //                     <p class="col-6">محل الإقامة: <span>${currentApplicant.city}</span></p>
    //                     <p class="col-6">الجنس:<span>${currentApplicant.gender}</span></p>
    //                 </div>
    //             </div>
    //             <div class="w-100 container-fluid p-0 ">
    //                 <div class="info w-100 m-0 row justify-content-center align-items-cneter">
    //                     <p class="col-6">المؤهل: <span>${currentApplicant.qualification}</span></p>
    //                     <p class="col-6">تاريخ الإبتداء:<span> ${currentApplicant.start_date}</span></p>
    //                     <p class="col-6">تاريخ الانتهاء: <span>${currentApplicant.end_date}</span></p>
    //                     <p class="col-6">الدرجة: <span>${currentApplicant.degree}</span></p>
    //                 </div>
    //             </div>
    //             <div class="w-100 container-fluid p-0 ">
    //                 <div class="info m-0 border-bottom odd w-100 row justify-content-center align-items-cneter">
    //                     <p class="col-6">مستوى الخبرة: <span>${currentApplicant.experience_level}</span></p>
    //                     <p class="col-6">مهارات ال IT: <span> ${currentApplicant.it_skills}</span></p>
    //                     <p class="col-6">الراتب المتوقع: <span>${currentApplicant.expec_salary} ر.س</span></p>
    //                     <p class="col-6">اللغات: <span>${currentApplicant.languages?.join(', ')}</span></p>
    //                 </div>
    //             </div>

    //             <div class="deta">
    //                 <a href="${currentApplicant.CV}" target="_blank" class="more">السيرة الذاتية</a>
    //                 <a href="${currentApplicant.video_url}" class="popup-youtube1 vidi more">الفيديو
    //                     التعريفي</a>
    //             </div>
    //             <div class="actions row justify-content-center align-items-center">
    //                 <button class="btn btn-green">قبول المتقدم</button>
    //                 <button class="btn btn-red">رفض المتقدم</button>
    //             </div>

    //         </div>
    //     </div>
    //     `)
}

// function getPrevApplicant(applicantIndex) {
//     let currentIndex = applicantIndex - 1
//     handleDisabledNavigations(currentIndex)
// }

// function getNextApplicant(applicantIndex) {
//     let currentIndex = applicantIndex + 1
//     handleDisabledNavigations(currentIndex)
// }

// function handleDisabledNavigations(applicantIndex) {
//     if (applicantIndex == 0) {
//         renderApplicantData(applicantIndex)
//         $('#prevApplicant').attr('disabled', 'disabled');
//         $('#nextApplicant').removeAttr('disabled');
//     } else if (applicantIndex == applicantsData.length - 1) {
//         renderApplicantData(applicantIndex)
//         $('#nextApplicant').attr('disabled', 'disabled');
//         $('#prevApplicant').removeAttr('disabled');
//     }
//     else {
//         renderApplicantData(applicantIndex)
//         $('#prevApplicant').removeAttr('disabled');
//         $('#nextApplicant').removeAttr('disabled');
//     }
// }

// ===========================end modal functions===========================


// =========================== start accept/reject modals functions===========================
function acceptCheckedApplicants(state) {
    $('#acceptanceModal').modal({ show: true, backdrop: 'static', keyboard: false });
}

function rejectCheckedApplicants(state) {
    $('#rejectionModal').modal({ show: true, backdrop: 'static', keyboard: false });
}

function renderAcceptedModal(applicantIndex) {
    let currentApplicant = applicantsData[applicantIndex]
    if (currentApplicant)
        // open modal
        $('#applicantDetailsModal').modal({ show: true, backdrop: 'static', keyboard: false });
    //reset content
    $('#applicant-modal').html('')
    //rendering
    $('#applicant-modal').html(`
        `)
}
// =========================== end accept/reject modals functions===========================



function openModal  (event) {
    console.log($(this))
    console.log(event)
    currentApplicantIndex = Number($(this).parent().attr('data-index'))
    // open modal
    $('#applicantDetailsModal').modal({ show: true, backdrop: 'static', keyboard: false });
    // renderApplicantData(currentApplicantIndex)
    handleDisabledNavigations(currentApplicantIndex)
}