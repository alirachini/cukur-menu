/* Arabic UI strings for Decap CMS (Decap ships no Arabic locale).
   Merged over the built-in English strings so any key not translated here still shows. */
(function () {
  var ar = {
    auth: {
      login: 'تسجيل الدخول',
      loggingIn: 'جاري تسجيل الدخول...',
      loginWithNetlifyIdentity: 'تسجيل الدخول',
      errors: {
        email: 'اكتب بريدك الإلكتروني.',
        password: 'اكتب كلمة السر.',
        identitySettings: 'ما قدرنا نوصل لإعدادات الدخول. تأكد إنو Identity و Git Gateway مفعّلين على Netlify.'
      }
    },
    app: {
      header: {
        content: 'المحتوى', workflow: 'سير العمل', media: 'الصور', quickAdd: 'إضافة سريعة',
        deploys: 'النشر', deploysDeployed: 'منشور', deploysPublishing: 'جاري النشر…',
        deploysBuilding: 'جاري البناء', deploysFailed: 'فشل النشر'
      },
      app: {
        errorHeader: 'خطأ بتحميل إعدادات لوحة التحكم',
        configErrors: 'أخطاء بالإعدادات',
        checkConfigYml: 'راجع ملف config.yml.',
        loadingConfig: 'جاري تحميل الإعدادات...',
        waitingBackend: 'جاري الاتصال...'
      },
      notFoundPage: { header: 'الصفحة مش موجودة' }
    },
    collection: {
      sidebar: { collections: 'الأقسام', allCollections: 'الكل', searchAll: 'بحث', searchIn: 'بحث في' },
      collectionTop: {
        sortBy: 'ترتيب حسب', viewAs: 'عرض', viewAsList: 'قائمة', viewAsGrid: 'شبكة',
        ascending: 'تصاعدي', descending: 'تنازلي', filterBy: 'تصفية', groupBy: 'تجميع',
        searchResults: 'نتائج البحث عن "%{searchTerm}"',
        searchResultsInCollection: 'نتائج البحث عن "%{searchTerm}" في %{collection}'
      },
      entries: {
        loadingEntries: 'جاري التحميل...', cachingEntries: 'جاري التحميل...',
        longerLoading: 'ممكن ياخد كم دقيقة', noEntries: 'ما في شي'
      },
      groups: { other: 'غير ذلك', negateLabel: 'مش %{label}' },
      defaultFields: { author: { label: 'الكاتب' }, updatedOn: { label: 'آخر تعديل' } }
    },
    editor: {
      editorControl: { field: { optional: 'اختياري', widgetLabel: 'حقل %{widgetLabel}' } },
      editorControlPane: {
        widget: {
          required: '%{fieldLabel} مطلوب.',
          regexPattern: '%{fieldLabel} مش بالشكل الصحيح.',
          processing: 'جاري معالجة %{fieldLabel}.',
          range: '%{fieldLabel} لازم يكون بين %{minValue} و %{maxValue}.',
          min: '%{fieldLabel} لازم يكون %{minValue} أو أكتر.',
          max: '%{fieldLabel} لازم يكون %{maxValue} أو أقل.'
        }
      },
      editor: {
        onLeavePage: 'متأكد بدك تطلع من هالصفحة؟ التعديلات يلي ما انحفظت رح تروح.',
        onPublishing: 'متأكد بدك تنشر التعديلات؟',
        onPublishingWithUnsavedChanges: 'في تعديلات ما انحفظت، احفظ قبل النشر.',
        onDeletePublishedEntry: 'متأكد بدك تحذف؟',
        loadingEntry: 'جاري التحميل...',
        confirmLoadBackup: 'لقينا نسخة محفوظة من تعديلاتك يلي ما خلصت. بدك تكمّل منها؟'
      },
      editorInterface: { togglePreview: 'إظهار/إخفاء المعاينة', toggleScrollSync: 'مزامنة التمرير' },
      editorToolbar: {
        publishing: 'جاري النشر...', publish: 'نشر', published: 'منشور',
        unpublish: 'إلغاء النشر', duplicate: 'نسخ', unpublishing: 'جاري إلغاء النشر...',
        publishAndCreateNew: 'نشر وإضافة جديد', publishAndDuplicate: 'نشر ونسخ',
        deleteEntry: 'حذف', deletePublishedEntry: 'حذف',
        saving: 'جاري الحفظ...', save: 'حفظ', deleting: 'جاري الحذف...', updating: 'جاري التحديث...',
        status: 'الحالة: %{status}',
        backCollection: ' تعديل %{collectionLabel}',
        unsavedChanges: 'في تعديلات ما انحفظت', changesSaved: 'انحفظت التعديلات',
        draft: 'مسودة', inReview: 'قيد المراجعة', ready: 'جاهز', publishNow: 'انشر هلّق',
        deployPreviewPendingButtonLabel: 'فحص المعاينة', deployPreviewButtonLabel: 'معاينة',
        deployButtonLabel: 'شوف الموقع'
      },
      editorWidgets: {
        image: {
          choose: 'اختار صورة', chooseMultiple: 'اختار صور', chooseUrl: 'من رابط',
          replaceUrl: 'استبدال برابط', promptUrl: 'اكتب رابط الصورة',
          chooseDifferent: 'اختار صورة تانية', addMore: 'زيد صور',
          remove: 'شيل الصورة', removeAll: 'شيل كل الصور'
        },
        file: {
          choose: 'اختار ملف', chooseUrl: 'من رابط', chooseMultiple: 'اختار ملفات',
          replaceUrl: 'استبدال برابط', promptUrl: 'اكتب رابط الملف',
          chooseDifferent: 'اختار ملف تاني', addMore: 'زيد ملفات',
          remove: 'شيل الملف', removeAll: 'شيل كل الملفات'
        },
        datetime: { now: 'هلّق', clear: 'مسح', setToNow: 'خلّي %{fieldLabel} هلّق' },
        list: { add: '＋ زيد %{item}', addType: '＋ زيد %{item}' },
        object: { expand: 'فتح', collapse: 'سكّر' }
      }
    },
    mediaLibrary: {
      mediaLibraryCard: { draft: 'مسودة', copy: 'نسخ', copyUrl: 'نسخ الرابط', copyPath: 'نسخ المسار', copyName: 'نسخ الاسم', copied: 'انتسخ' },
      mediaLibrary: {
        onDelete: 'متأكد بدك تحذف الصور المختارة؟',
        fileTooLarge: 'الملف كبير كتير.\nالحد الأقصى %{size} كيلوبايت.'
      },
      mediaLibraryModal: {
        loading: 'جاري التحميل...', close: 'سكّر', noResults: 'ما في نتائج.',
        noAssetsFound: 'ما في ملفات.', noImagesFound: 'ما في صور.', private: 'خاص ',
        images: 'الصور', mediaAssets: 'الملفات', search: 'بحث...',
        uploading: 'جاري الرفع...', upload: 'رفع صورة', download: 'تنزيل',
        deleting: 'جاري الحذف...', deleteSelected: 'حذف المختار', chooseSelected: 'اختيار'
      }
    },
    ui: {
      default: { goBackToSite: 'رجوع للمنيو' },
      errorBoundary: { title: 'خطأ', details: 'صار خطأ - ', reportIt: 'بلّغ عنه.', detailsHeading: 'التفاصيل' },
      settingsDropdown: { logOut: 'تسجيل الخروج', account: 'الحساب' },
      toast: {
        onFailToLoadEntries: 'فشل التحميل: %{details}',
        onFailToPersist: 'فشل الحفظ: %{details}',
        onFailToDelete: 'فشل الحذف: %{details}',
        missingRequiredField: 'في حقل مطلوب فاضي. عبّيه قبل الحفظ.',
        entrySaved: 'انحفظ ✓',
        entryPublishing: 'انحفظ · جاري النشر…',
        entryPublished: 'انحفظ ✓ — التعديل بيبيّن عالمنيو خلال دقيقة تقريباً',
        entryUnpublished: 'انلغى النشر',
        onFailToPublishEntry: 'فشل النشر: %{details}',
        entryUpdated: 'انحدّثت الحالة',
        viewSite: 'شوف', viewEntry: 'شوف',
        onFailToAuth: '%{details}',
        onLoggedOut: 'انتهت الجلسة، سجّل دخول من جديد',
        onBackendDown: 'في مشكلة بالخدمة حالياً. شوف %{details}'
      }
    }
  };

  function merge(base, over) {
    var out = {};
    var k;
    for (k in base) out[k] = base[k];
    for (k in over) {
      out[k] = (over[k] && typeof over[k] === 'object' && base && base[k] && typeof base[k] === 'object')
        ? merge(base[k], over[k]) : over[k];
    }
    return out;
  }

  var en = (window.CMS && CMS.getLocale && CMS.getLocale('en')) || {};
  CMS.registerLocale('ar', merge(en, ar));
})();
