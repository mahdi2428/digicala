import React, { useState , useCallback} from "react";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { Link } from "react-router-dom";
export default function Footer(){
    const [show , setShow] = useState(false);
    const toggleIsExpanded = useCallback(() => {
        setShow((show) => !show);
      }, []);
    return(
        <>
        <div className="border-t mt-10 lg:block hidden pt-5 bg-gray-100">
        <div className=" mx-[150px]">
            <div className="flex flex-row-reverse justify-between ">
                <div><img src="https://www.digikala.com/statics/img/svg/digi.svg" /></div>
                <div className="text-sm items=center flex flex-row-reverse border rounded-2xl p-2 text-gray-400">
                    <p>بازگشت به بالا</p>
                    <div>
                        <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                    </div>
                </div>
            </div>
            <div className="pt-2">
                <p className="text-sm text-gray-700 text-right">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱  |   ٧ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
            </div>
            <div className="flex flex-row-reverse justify-between mt-3">
                <div className="flex flex-col items-center">
                    <img src="https://www.digikala.com/statics/img/svg/footer/express-delivery.svg" />
                    <p className="text-xs">امکان تحویل اکسپرس</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg" />
                    <p className="text-xs" >امکان تحویل اکسپرس</p>
                </div>
                <div className="flex flex-col items-center"> 
                    <img src="https://www.digikala.com/statics/img/svg/footer/support.svg" />
                    <p className="text-xs">امکان تحویل اکسپرس</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="https://www.digikala.com/statics/img/svg/footer/days-return.svg" />
                    <p className="text-xs">امکان تحویل اکسپرس</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="https://www.digikala.com/statics/img/svg/footer/original-products.svg" />
                    <p className="text-xs">امکان تحویل اکسپرس</p>
                </div>
            </div>
            <div className="flex flex-row-reverse text-right justify-between mt-8">
                <div className="text-gray-400 text-sm ">
                    <ul className="flex flex-col gap-1">
                        <li className="text-black text-base ">با دیجی‌کالا</li>
                        <li><Link>اتاق خبر دیجی کالا</Link></li>
                        <li><Link>فروش در دیجی کالا</Link></li>
                        <li><Link>فرصت های شغلی</Link></li>
                        <li><Link>گزارش تخلف در دیجی کالا</Link></li>
                        <li><Link>تماس با دیجی کالا</Link></li>
                        <li><Link>درباره دیجی کالا</Link></li>
                    </ul>
                </div>
                <div className="text-gray-400 text-sm ">
                    <ul className="flex flex-col gap-1">
                        <li className="text-black text-base">خدمات مشتریان</li>
                        <li><Link>پاسخ به پرسش های متداول</Link></li>
                        <li><Link>رویه های بازگردان کالا</Link></li>
                        <li><Link>شرایط استفاده</Link></li>
                        <li><Link>حریم خصوصی</Link></li>
                        <li><Link>گزارش باگ</Link></li>
                    </ul>
                </div>
                <div className="text-gray-400 text-sm">
                    <ul className="flex flex-col gap-1">
                        <li className="text-black text-base">راهنمای خرید از دیجی کالا</li>
                        <li><Link>نحوه ثبت سفارش</Link></li>
                        <li><Link>رویه ارسال سفارش</Link></li>
                        <li><Link>شیوه های پردانختا</Link></li>
                    </ul>
                </div>
                <div>
                    <div className="text-gray-700"><p>!همراه ما باشید </p></div>
                    <div className="flex gap-8 text-gray-500 flex-row-reverse my-2 text-3xl ">
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-linkedin"></i>
                    </div>
                    <div>
                        <p>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</p>
                        <div className="flex flex-row-reverse gap-2 mt-3">
                            <input className="bg-gray-200 rounded-xl text-right py-2 px-1 w-full" type="gmail" placeholder="ایمیل شما" />
                            <button className="bg-red-300 px-2 py-1 rounded-xl" type="submit"> ثبت</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-row-reverse justify-between mt-5">
                    <div style={{height : show ? "1300px" : "120px"}}
                     className="text-gray-600 basis-9/12 text-right overflow-hidden">
                        <div className="text-sm flex flex-col gap-1">
                            <p className="text-gray-700 text-xl ">فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</p>
                            <span>
                                یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه 
                            </span>
                            <p className={show ? "" : "text-gray-500"}>اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.</p>
                            <p className={show ? "" : "text-gray-300"}>یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌ اینترنتی دیگری، این است که کالای خریداری شده چه زمانی به دستشان می‌رسد. دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با فروشنده کالا،‌ مقصد کالا و همچنین نوع</p>
                            <p>کالا در اختیار کاربران خود قرار می‌دهد. هر یک از روش های ارسال دیجی کالا شرایط و ویژگی‌های خاص خود را دارند که ممکن است گاهی برای کاربران جدید، مبهم و پیچیده به نظر برسند. برای آگاهی بیشتر مشتریان از خدمات دیجی‌کالا، این فروشگاه اینترنتی در بخشی از وب‌سایت خود راهنمای کاملی از شیوه‌‌های ارسال را به صورت ساده و به دور از پیچیدگی، قرار داده است که شامل 8 نوع ارسال کالا به روش‌های زیر است: ارسال امروز، دریافت حضوری، دریافت از گنجه، ارسال توسط فروشنده، ارسال عادی، ارسال کالاهای بزرگ، سنگین و فوق سنگین، ارسال سریع سوپرمارکتی، ارسال با پست</p>
                        </div>
                        <div className="text-sm flex flex-col gap-1">
                            <p className="text-lg font-bold">کدام محصولات در دیجی‌کالا قابل سفارش هستند؟</p>
                            <p>تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی روزهای هفته و تمامی شبانه روز یا در روزهای خاصی مثل حراج شگفت انگیز دیجی‌کالا که محصولات دارای تخفیف عالی می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز و محدوده زمانی مناسب خود، درب منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر مجموعه‌های پرطرفدار محصولات دیجی‌کالا شامل مواردی می‌شود که در ادامه به معرفی آن‌ها می‌پردازیم که امکان ارسال امروز برای آن ها وجود دارد. </p>
                        
                            <p className="text-lg font-bold">کالای دیجیتال</p>
                            <p>انواع گوشی موبایل از برندهای مختلفی مثل آیفون،  گوشی سامسونگ، گوشی نوکیا، گوشی شیائومی، گوشی هواوی، و...، انواع کنسول بازی ps4 و ps5، انواع تبلت‌های پرطرفدار مثل تبلت سامسونگ نوت 10، انواع هندزفری مثل هندزفری بی سیم، تلوزیون از برندهای مختلف مثل تلویزیون سامسونگ، سونی و...، انواع مانیتور، کیس، کیبورد، مودم از برندهای مختلف مثل مودم ایرانسل، آنتن و ... تنها بخشی از محصولاتی هستند که زیر مجموعه کالای دیجیتال در دیجی‌کالا قرار دارند.</p>
                        
                            <p className="text-lg font-bold">خودرو، ابزار و تجهیزات صنعتی</p>
                            <p>انواع خودروهای ایرانی و خارجی از برندهای مطرحی مثل هوندا، کیا و...، موتور سیکلت از برندهایی مثل کویر موتور و...، لوازم جانبی خودرو مثل سیستم صوتی تصویر، ضبط و...، لوازم یدکی مثل دیسک و صفحه کلاج و... و لوازم مصرفی خودرو مثل کفپوش سانا در این گروه قرار می‌گیرند.</p>
                            <p className="text-lg font-bold">مد و پوشاک</p>
                            <p>محصولاتی مثل انواع لباس مثل لباس مجلسی زنانه و مردانه، لباس راحتی، لباس ورزشی، اکسسوری، کیف، کفش، عینک آفتابی، لباس زیر، شال و روسری و... جزو مواردی هستند که می‌توانید آن‌ها را از برندهای مطرح ایرانی و خارجی موجود در دیجی کالا مثل آدیداس، نایکی، دبنهامز، آلدو، درسا و... خریداری کنید.</p>
                            
                            <p className="text-lg font-bold">اسباب بازی کودک و نوزاد</p>
                            <p>در این دسته از کالاهای دیجی‌کالا، انواع لوازم بهداشتی و حمام کودک و نوزاد، انواع پوشاک و کفش، تبلت، اسباب‌بازی، لوازم اتاق خواب کودک، لوازم ایمنی، لوازم شخصی و غذا خوری و ... قرار می‌گیرد تا خرید را برای پدر و مادرها به کاری سریع و آسان تبدیل کند.</p>

                            <p className="text-lg font-bold">کالاهای سوپر مارکتی</p>
                            <p>هر چیزی از مواد خوراکی که به آن نیاز دارید، در سوپرمارکت دیجی‌کالا پیدا می‌شود، محصولات پرطرفداری مثل کره بادام‌زمینی، عسل، سس، قهوه، زعفران، شکلات، انواع نان و ... از برندهای معتبر و معروفی مثل نستله، نوتلا، استارباکس، مزمز، چی توز و ... همگی در اختیار شما هستند و تا رسیدن به آشپزخانه شما تنها چند کلیک فاصله دارند.</p>

                            <p className="text-lg font-bold">زیبایی و سلامت</p>
                            <p>انواع لوازم آرایش مثل لاک، رنگ مو، لوازم آرایش لب، چشم، صورت و... همگی در دیجی‌کالا موجود هستند. همچنین محصولات بهداشتی مثل انواع شامپو، کرم، ماسک صورت، ضد تعریق، ماسک مو  و...، انواع لوازم شخصی برقی، ست هدیه، بهترین انواع عطر و اسپری، انواع زیورآلات طلا و نقره مثل سرویس طلا، سرویس نقره و... به همراه وسایل مراقبت شخصی طبی در گروه زیبایی و سلامت دیجی‌کالا قرار می‌گیرد. در این بخش برندهای مطرحی مثل اسنس، پنبه ریز، سینره و... حضور دارند.</p>
                        
                            <p className="text-lg font-bold">خانه و آشپزخانه</p>
                            <p>یکی از متنوع‌ترین بخش‌های دیجی‌کالا، بخش لوازم خانه و آشپزخانه است که از محصولاتی مثل صندلی گیمینگ در بخش صندلی‌ها گرفته تا انواع مبل راحتی، انواع آبگرمکن مثل آبگرمکن بوتان، لباسشویی‌های متنوع مثل انواع لباسشویی اسنوا، شیرآلات مختلف مثل شیرآلات قهرمان و...، ظروف و همچنین لوازم برقی آشپزخانه مثل توستر و... را شامل می‌شود و امکان خریدی عالی را برای مشتریان فراهم کرده است. در بخش لوازم خانگی دیجی‌کالا، برندهای معتبری مثل تفال، اخوان، فیلیپس، ال جی، اسنوا، جی پلاس و... حضور دارند.</p>

                            <p className="text-lg font-bold">کتاب، لوازم تحریر و هنر</p>
                            <p>بخش هنر، کتاب، رمان و لوازم تحریر دیجی‌کالا نیز یکی از متنوع‌ترین بخش‌های این فروشگاه اینترنتی است. انواع کتاب و مجله، کتاب زبان، بازی، لوازم تحریر با طرح‌های مختلف مانند دختر کفشدوزکی، سازهایی مثل پیانو، سنتور، هنگ درام  و... با بهترین قیمت‌ها و از بهترین برندها در دسترس شما قرار دارند</p>

                            <p className="text-lg font-bold">ورزش و سفر</p>
                            <p>هر نوع وسیله و لباس ورزشی که فکرش را کنید، انواع وسایل کمپینگ و کوهنوردی، ساک و قمقمه ورزشی و... در این بخش قرار می‌گیرند. همچنین شما می‌توانید وسایل مد نظر خود را بر اساس نوع ورزش (آبی، هوازی، بدنسازی و...) در دسته‌بندی‌های دیجی‌کالا پیدا کنید.</p>

                            <p className="text-lg font-bold">محصولات بومی و محلی</p>
                            <p>و در آخر دیجی‌کالا از طریق به فروش رساندن محصولات بومی و سنتی متفاوتی مثل انواع خوراکی، گلیم و گبه، ابزار و ... تلاش کرده تا بین هنر ایرانی و متقاضیان آن کوتاه‌ترین راه را پیدا کند. در این بخش شما می‌توانید انواع محصولات از جمله ظروف زیبای مخصوص به سفره هفت‌سین  و پذیرایی از مهمانان در روزهای نوروز، انواع آیینه و شمعدان و هر آن چیزی را که برای خلق زیبایی در روزهای بهاری به آن نیاز دارید، با قیمت مناسب و تنوع بسیار بالا انتخاب کنید. همچنین در صفحه برچسب ها، امکان مشاهده و خرید انواع محصولات با طرح های بومی وجود دارد.  دیجی‌کالا همچنین برای اینکه حال و هوای عید را به اعضای خود هدیه کند، تقویم ۱۴۰۱، انواع ایده عکس پروفایل عید نوروز، آهنگ‌های عید نوروز و موزیک‌های شاد بهاری، وسایل مربوط به خانه‌تکانی و انواع لباس های عید  را برای شما فراهم کرده است تا بتوانید در کنار خرید خود، از این حال و هوای تازه نهایت لذت را ببرید.</p>

                            <p className="text-lg font-bold">گزارش های سالیانه دیجی کالا</p>
                            <p>در راستای توجه ویژه به شفافیت به عنوان یکی از اصلی‌ترین ارزش‌های محوری دیجی‌کالا، با شروع سال ۱۳۹۸ داستان‌پردازی با داده‌های آماری و ارائه گزارش‌های سالانه آغاز شد. مسیری که دستاورد آن تا امروز چندین گزارش سالانه و تخصصی مثل گزارش سالانه ۱۳۹۸، گزارش سالانه ۱۳۹۹ و گزارش سالانه ۱۴۰۰  دیجی‌کالا هستند. علاوه بر این، گزارش منابع انسانی سال ۱۳۹۹، گزارش منابع انسانی سال ۱۴۰۰  و همچنین گزارش کتاب دیجی‌کالا، از دیگر گزارش‌های تخصصی دیجی‌کالا به حساب می‌آیند. انتشار این گزارش‌ها امکان رصد شفاف‌تر و دقیق‌تر خدمات دیجی‌کالا را فراهم می‌کند، وضعیت بازار آنلاین کشور را به نمایش می‌گذارد و به تمامی کسب‌وکارهای ایرانی کمک می‌کند تا با فرایندهای فروش و عرضه آنلاین کالاهای خود بیشتر آشنا شوند</p>
                        </div>
                    </div>

                    <div className="basis-1/12 flex gap-2">
                        <img className="object-contain border rounded-xl h-32" src="https://www.digikala.com/statics/img/png/rezi.webp" />
                        <img className="object-contain border rounded-xl h-32" src="https://www.digikala.com/statics/img/png/rezi.webp" />
                        <img className="object-contain border rounded-xl h-32" src="https://www.digikala.com/statics/img/png/rezi.webp" />
                    </div>
                </div>
                <div className="flex flex-row-reverse text-sm items-center text-blue-500">
                    <button onClick={toggleIsExpanded}>{show ? " بستن" : " مشاهده بیشتر"  }</button>
                    <ArrowBackIosNewOutlinedIcon fontSize="" />
                </div>
            </div>
            <div  className=" flex justify-center border-t pt-5 mt-5 text-sm text-gray-500"><p>برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.</p></div>
        </div>
        </div>
        </>
    )
}