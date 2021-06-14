export const ar = {
  GENERAL: {
    WOOHOO: 'ووهوو!',
    NEXT: 'التالى',
    VERIFY: 'تاكيد',
    SUBMIT: 'انهاء و ارسال',
    OK: 'حسنا',
    CANCEL: 'الغاء',
    SAVE: 'حفظ',
    ADD: 'اضف',
    SELECT_PHOTO: 'اختار صوره',
    CHOOSE_FROM_GALLERY: '...اختار من معرض الصور',
    TAKE_PHOTO: '...تصوير من الكاميرا',
    UNKNOWN: 'مجهول',
    TOKEN_SENT: ': تم ارسال رقم التاكيد الى',
  },

  //AUTH
  LOGIN: {
    TITLE_1: 'مرحبا ،',
    TITLE_2: 'تسجيل الدخول',
    USERNAME: 'اسم المستخدم',
    Email: 'حساب المستخدم',
    PASSWORD: 'كلمه المرور',
    FORGET_PASSWORD: 'هل نسيت كلمة المرور؟',
    GET_STARTED: 'ابدا',
    NO_ACCOUNT: 'ليس لديك حساب؟',
    SIGN_UP: 'سجل هنا',
  },

  //SingUp words
  SIGN_UP: {
    TITLE: 'سجل هنا',
    ENTER_EMAIL: 'ادخل البريد الالكتروني',
    USERNAME: 'اسم المستخدم',
    PASSWORD: 'كلمه المرور',
    CONFIRMPASSWORD: 'تاكيد كلمه المرور',
    PHONE: 'رقم الهاتف',
    AGREE_ON: 'أوافق على ',
    TERMS_CONDITIONS: 'الشروط و الأحكام',
    REFERRAL_CODE: 'كود التوصيه',

    IAM: 'انا',
    MALE: 'ذكر',
    FEMALE: 'انثي',
    BIRTH: 'تاريخ الميلاد',
  },
 MOVIES:{
      INPUT_CATEGORY_NAME:"اسم الفئة",
      INPUT_CATEGORY_DESCRIPTION:"وصف الفئة",
      CREATE_BUTTON:"اضافه",
      SEE_MORE_MOVIES:"عرض القائمة ...",
  },
    MOVIES_LIST:{
      EDIT:"تعديل",
      DELETE:"مسح",
      ADD_BUTTON:"اضافة فيلم",
      MOVIE_NAME:"اسم الفيلم",
      MOVIE_RATE:"تقييم الفيلم",
      MOVIE_DESCRIPTION:"وصف الفيلم",
  },

  //LOST CONNECTION SCREEN
  LOST_CONNECTION: {
    OOPS_TEXT: 'عذرا !',
    NO_NETWORK: 'بطىء او انقطاع اتصال الانترنت .',
    CHECK_NETWORK: 'من فضلك تاكد من الاتصال بالانترنت .',
    TRY_AGAIN: 'اعاده المحاوله',
  },

  //Error Handling Messages
  EDIT_ERR: {
    ERR400: 'البيانات المدخله غير صحيحه',
    ERR403: 'اسم المستخدم موجود بالفعل',
  },

  ERRORS: {
    GENERAL: {
      TITLE: 'عفوًا',
      DESC: 'حدث خطأ ما. أعد المحاولة من فضلك',
    },
    SIGN_IN: {
      TITLE: 'تسجيل الدخول',
      INCORRECT: 'اسم المستخدم أو كلمة المرور غير صحيحة',
    },
    SIGN_UP: {
      TITLE: 'سجل هنا',
      EMAIL_ALREADY_EXIST: 'البريد الالكترونى المدخل موجود بالفعل',
      WRONG_EMAIL_OR_OTP: 'رقم التاكيد او البريد الالكترونى غير صحيحا',
      WRONG_OTP: 'رقم التاكيد غير صحيحا',
      USER_IMAGE: 'حدث خطأ ما أثناء تحميل الصورة ، يرجى المحاولة مرة أخرى',
    },
  },

  //validations
  VALIDATIONS: {
    USERNAME_PASSWORD:
      'يجب ان يكون اسم المستخدم و كلمة المرور من ٦ إلى ۱٥ حرفًا رقميًا أو رمزًا',
    PASSWORD: 'يجب ان يكون كلمة المرور من ٦ إلى ۱٥ حرفًا رقميًا أو رمزًا',
    PASSWORD_MATCH: 'كلمات المرور غير متطابقة',
    OLD_PASSWORD_MATCH: 'لا يمكن أن تكون كلمة المرور الجديدة هي نفسها القديمة',
    EMAIL: 'رجاء قم بإدخال بريد الكتروني صحيح',

    PHONE_NUMBER_EMPTY: 'من فضلك ادخل رقم الهاتف',
    PHONE_NUMBER_VALIDATE:
      'رقم الهاتف يجب ان يبدا ب ۰۱۱ او ۰۱۲ او ۰۱۰ . ولا يزيد عن ۱۱ رقم',

    PASSWORD_EMPTY: 'برجاء التاكيد من ادخال كلمه مرور المستخدم',
    PASSWORD_VALIDATE:
      'كلمه المرور يجب ان لا تقل عن ۸ احرف وتحتوى على رقم واحد على الاقل ',
  },
};
