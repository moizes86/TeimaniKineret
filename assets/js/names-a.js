

(() => {
    // Made Aliya and settled in Kineret
    const olimList = [

        "צאירי דוד בן ישראל",
        "צאירי סעידה בת אברהם",
        "צאירי מרגלית דוד בן דוד",
        "צאירי שלמה בן דוד",
        "מרגלית יוסף בן דוד",
        "מרגלית לאה בת שלום ",
        "צאירי יוסף בן ישראל",
        "צאירי סעידה בת רצון",
        "צאירי מרגלית ישראל בן יוסף",
        "צאירי זכריה בן ישראל",
        "צאירי שולמית בת אברהם ",
        "צאירי סעדיה בן זכריה",
        "צאירי מרגלית רבקה לאה בת זכריה",
        "צאירי מנצור אסתר בת זכריה",
        "צאירי נחמה בת זכריה",
        "צאירי מרגלית יהודה בן דוד",
        "צאירי מרגלית אילה רחל גאזל בת יפת",
        "צאירי מרגלית מרים בת יהודה",
        "צאירי נתן בן יפת",
        "צאירי סעידה לאה בת יששכר",
        "צאירי סעדיה בן נתן",
        "צאירי רחל בת נתן",
        "צאירי נתן בן נתן",
        "צאירי דוד בן נתן",
        "צאירי חממה",
        "צאירי נדאף סעידה בת דוד וחממה",
        "צאירי חנה בת אברהם",
        "צאירי מרגלית אברהם בן דוד",
        "צאירי מרגלית רבקה בת סעדיה",
        "צאירי ישראל בן אברהם",
        "צאירי רחל בת אברהם",
        "מנצור חיים בן מנצור",
        "מנצור שמעה בת יפת",
        "מנצור משה בן חיים",
        "מנצור סלמה בת חיים",
        "מרגלית שרה זוהרה בת נתן",
        "מעודד יפת",
        "מעודה מרים בת מעודד",
        "נדאף שלום סאלם בן יחיא",
        "נדאף מלכה בת שלום",
        "נדאף שרה בת שלום",
        "צעירי יפת בן יוסף",
        "צאירי ישעיהו בן יוסף",
        "צאירי ימימה בת יפת "
    ]

    // Born in Kineret
    const bornList = [
        {
            name: 'מרגלית ברוך',
            father: 'יהודה',
            year: '1916'
        },
        {
            name: 'מרגלית חזקיה',
            father: 'יהודה',
            year: '1919'
        },
        {
            name: 'מרגלית פנינה',
            father: 'יהודה',
            year: '1924'
        },
        {
            name: 'מרגלית שולמית',
            father: 'יהודה',
            year: '1922'
        },
        {
            name: 'מרגלית ציפורה',
            father: 'אברהם',
            year: '1920'
        },
        {
            name: 'מרגלית רות',
            father: 'אברהם',
            year: '1923'
        },
        {
            name: 'מרגלית אביגיל',
            father: 'יהודה',
            year: '1929'
        },
        {
            name: 'מנצור (ללא שם)',
            father: 'משה',
            year: '1925'
        },
        {
            name: 'מנצור מלכה',
            father: 'משה',
            year: '1926'
        },
        {
            name: 'מנצור ידידה',
            father: 'משה',
            year: '1929'
        },
        {
            name: 'מנצור הדסה',
            father: 'משה',
            year: '1930'
        },
        {
            name: 'צאירי יעל',
            father: 'הרב דוד',
            year: ''
        },
        {
            name: 'צאירי שושנה',
            father: 'הרב דוד',
            year: ''
        },
        {
            name: 'מרגלית הדסה',
            father: 'זכריה',
            year: ''
        },
        {
            name: 'מרגלית אהובה תמר',
            father: 'יוסף',
            year: '1929'
        },
        {
            name: 'מרגלית שמואל',
            father: 'דוד',
            year: ''
        },
        {
            name: 'מרגלית ישראל',
            father: 'דוד',
            year: ''
        },
        {
            name: 'מרגלית רחל',
            father: 'דוד',
            year: '1913'
        },
        {
            name: 'מרגלית שולמית',
            father: 'דוד',
            year: '1915'
        },
        {
            name: 'מרגלית יהודה',
            father: 'דוד',
            year: '1917'
        },
        {
            name: 'מרגלית מרים',
            father: 'דוד',
            year: '1925'
        },
        {
            name: 'מרגלית זכריה',
            father: 'דוד',
            year: '1924'
        },
        {
            name: 'מרגלית שושנה',
            father: 'ישראל',
            year: '1926'
        },
        {
            name: 'מרגלית נתנאל',
            father: 'ישראל',
            year: '1927'
        },
        {
            name: 'מרגלית בת שבע',
            father: 'ישראל',
            year: '1930'
        }

    ]

    // Died and burried in Kineret
    const passedAwayList = [
        {
            name: 'מרגלית ישראל',
            father: 'דוד'
        },
        {
            name: 'מרגלית שמואל',
            father: 'דוד'
        },
        {
            name: 'מרגלית זכריה',
            father: 'ישראל'
        },
        {
            name: 'מרגלית פנינה',
            father: 'יהודה'
        },
        {
            name: 'צאירי הדסה',
            father: 'זכריה'
        },
        {
            name: 'צאירי ימימה',
            father: 'יפת'
        },
        {
            name: 'צאירי ישעיה',
            father: 'יוסף'
        },
        {
            name: 'צאירי יפת',
            father: 'יוסף'
        },
        {
            name: 'מעודד יפת',
            father: ''
        },
        {
            name: 'מנצור (ללא שם)',
            father: 'משה'
        },
        {
            name: 'מנצור סלמה',
            father: 'חיים'
        },
        {
            name: 'מנצור שמעה',
            father: 'יפת'
        },
        {
            name: 'מנצור חיים',
            father: 'מנצור'
        },
        {
            name: 'צאירי סעידה',
            father: 'רצון'
        },
        {
            name: 'צאירי יוסף',
            father: 'ישראל'
        },
        {
            name: 'צאירי רחל',
            father: 'אברהם'
        },
        {
            name: 'צאירי ישראל',
            father: 'אברהם'
        },
        {
            name: 'צאירי נתן',
            father: 'נתן'
        },
        {
            name: 'מרגלית ברוך',
            father: 'יהודה'
        },
        {
            name: 'מרגלית רחל',
            father: 'דוד'
        },
        {
            name: 'מרגלית שולמית',
            father: 'דוד'
        },
        {
            name: 'מרגלית יהודה',
            father: 'דוד'
        },
        {
            name: 'צאירי שושנה',
            father: 'דוד'
        },
        {
            name: 'צאירי יעל',
            father: 'דוד'
        },
        {
            name: 'צאירי שלמה',
            father: 'דוד'
        },
        {
            name: 'צאירי סעידה-לאה',
            father: 'יששכר'
        },
        {
            name: 'צעירי נתן',
            father: 'יפת'
        },
        {
            name: 'צאירי שולמית',
            father: 'אברהם'
        },
        {
            name: 'צאירי סעדיה',
            father: 'זכריה'
        },
        {
            name: 'צאירי רבקה',
            father: 'זכריה'
        },
        {
            name: 'צאירי זכריה',
            father: 'ישראל'
        }
    ];

    olimList.sort();        //Sort alphabetically
    olimList.reverse();
    // bornList.sort((a, b) => {
    //     return b.year - a.year;
    // });


    // ==== Came from Yemen ====
    olimList.forEach(e => {
        let markup = `
                <div class="d-flex col-sm-6 col-md-4 col-xl-3 align-items-center card text-center">
                    <p class="names-text-style my-1"> ${e} </p>
                </div>
        `
        document.querySelector('.name-list-olim').insertAdjacentHTML('afterbegin', markup);
    });


    // ==== Born in Kineret ====
    bornList.forEach(e => {

        let markup = `
                    <div class="d-flex col-6 col-md-4 col-xl-2 align-items-center card text-center flex-wrap">
                        <p class="my-0 names-text-style"> ${e.name} </p>
                       <p>
                       <b>אב:</b>
                      ${e.father}
                      <br>
                      <b>שנה:</b>
                        ${e.year}
                        </p>
                    </div>
        `
        document.querySelector('.name-list-born').insertAdjacentHTML('afterbegin', markup);
    });

    // ==== Passed away and burried in Kineret ====
    passedAwayList.forEach(e=>{
        let markup = `
                    <div class="d-flex col-6 col-md-4 col-xl-2 align-items-center card text-center flex-wrap">
                        <p class="names-text-style my-1"> ${e.name} </p>
                       <p>
                       <b> אב:</b>
                      ${e.father}
                      </p>
                    </div>
        `
        document.querySelector('.name-list-passed').insertAdjacentHTML('afterbegin', markup);
    });


})();
