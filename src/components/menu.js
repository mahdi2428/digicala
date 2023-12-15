import React from "react";
import "./menu.css"
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LuggageOutlinedIcon from '@mui/icons-material/LuggageOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <>
            <div className=" top-0 right-[68px] relative  ">
                        <ul className="w-48 absolute text-xs bg-gray-100 text-right flex flex-col">
                            <li className="hoverli group ">
                                <div><PhoneIphoneOutlinedIcon /></div>
                                <p>موبایل</p>
                                <div className="absolute bg-white h-[672px] right-[190px] top-0 group-hover:text-black w-[800px]">
                                    <div className="py-4 pr-6 text-blue-400">
                                        <p className="">
                                            <ArrowBackIosIcon fontSize="" />
                                            <Link>مشاهده همه محصولات</Link>
                                        </p>
                                    </div>
                                <div className="flex-row-reverse  flex ">
                                    <ul className=" whitespace-nowrap ">
                                        <li className=" hover:text-red-600 py-[12px] mx-4 mr-2 text-sm border-r-2 pr-2 border-red-400">برندهای مختلف گوشی موبایل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی اپل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی سامسونگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی شیایومی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی نوکیا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی هواوی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی آنر</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی موتورولا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ریملی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ناتینگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ارد</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی جی پلاس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی وان پلاس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی جی ال ایکس</li>
                                    </ul>
                                    <ul className="    whitespace-nowrap group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2  border-red-400">گوشی براساس قیمت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 2 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 5 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 7 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 10 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی بالای 15 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2 border-red-400">گوشی براساس حافظه داخلی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 16 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 32 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 64 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 128 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 256 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 1 ترابایت</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2  border-red-400">رزولوشن عکس </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 13 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 16 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 48 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 64 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 108 مگاپیکسل</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2 pr-2 border-red-400">گوشی برا ساس کاربری</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی اقتصادی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی میان رده</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی دانش آموزی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی گیمینگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی پرچمدار</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ضدآب</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی مناسب عکاسی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">5G گوشی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">دو سیمکارت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">(اندروید) Android</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">IOS</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">سایر سیستم عامل ها</li>
                                    </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="hoverli group">
                                <div><LaptopChromebookOutlinedIcon /></div>
                                <p>کالای دیجیتال</p>
                                <div className="absolute bg-white h-[672px] right-[190px] top-0 group-hover:text-black w-[800px] hidden group-hover:block overflow-y-scroll scrollbar">
                                    <div className="py-4 pr-6 text-blue-400">
                                        <p className="">
                                            <ArrowBackIosIcon fontSize="" />
                                            <Link>مشاهده همه محصولات</Link>
                                        </p>
                                    </div>
                                    <div className="flex-row-reverse  flex ">
                                    <ul className=" whitespace-nowrap ">
                                        <li className=" hover:text-red-600 py-[12px] mx-4 mr-2 text-sm border-r-2 pr-2 border-red-400">لپ تاپ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">لپ تاپ ایسوس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">لپ تاپ لنوو</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">مک بوک</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">HP لپ تاپ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">لپ تاپ دل </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">لپ تاپ کاستوم</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">لوازم جانبی لپ تاپ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">شارژر لپ تاپ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">کیف لب تاپ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">کول پد</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">استیکر لپ تاپ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">کامپیوتر</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">تجهیزات مخصوص بازی </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">مانیتور</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">کیس های اسمبل شده</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">قظعات داخلی کامپیوتر</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">ماوس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">کیبورد</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">لوازم جانبی گوشی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">کیف و کاور گوشی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">(شارژر همراه) پاوربانک</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">پایه نگهدارنده گوشی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">کتابخوان فیدیبوک</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">واقعیت مجازی</li>
                                    </ul>
                                    <ul className="    whitespace-nowrap group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2  border-red-400">کارت هدیه دیجی کالا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">کارت هدیه الکترونیکی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">ساعت و مچ بند هوشمند</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">تلویزیون</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">جی پلاس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">ایکس ویژن</li>
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2 border-red-400">دوو</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">اسنوا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">هدفون،هدست،میکروفن</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">اسپیکر بلوتوث و باسیم</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">SSD هارد،فلش و </li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2  border-red-400">دوربین</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">دوربین عکاسی ذیجیتال</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">دوربین ورزشی و فیلم برداری</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">دوربین چاپ سریع</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">لوازم جانبی دوربین </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">لنز</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">کیف</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">کارت حافظه</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">کاغذ چاپ عکس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">تبلت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">دوربین دو چشمی و شکاری</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">تلسکوپ</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2 pr-2 border-red-400">کنسول بازی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">شارژر تبلت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">کیف،کاور،لوازم جانبی تبلت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">باتری</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">دوربین های تحت شبکه</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">مودم و تجهیزات شبکه</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">ماشین های اداری</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">تلفن، بی سیم و سانترال</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">فکس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">پرینتر</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">لوازم جانبی اداری</li>
                                    </ul>
                                    </div>
                                </div>   
                            </li>
                            <li className="hoverli group"> 
                                <div><ChairOutlinedIcon /></div>
                                <p>خانه و اشپز خانه</p>
                                <div className="absolute w-[800px] bg-white h-[672px] right-[190px] top-0 group-hover:text-black hidden z-20 group-hover:block ">
                                    <div className="py-4 pr-6 text-blue-400">
                                        <p className="">
                                            <ArrowBackIosIcon fontSize="" />
                                            <Link>مشاهده همه محصولات</Link>
                                        </p>
                                    </div>
                                    <div className="flex-row-reverse  flex ">
                                    <ul className=" whitespace-nowrap ">
                                        <li className=" hover:text-red-600 py-[12px] mx-4 mr-2 text-sm border-r-2 pr-2 border-red-400">تلویزیون</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">ایکس ویژن</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">جی پلاس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">دوو</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">یخچال و فریزر</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">امرسان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">ایستکول</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">دکوراتیو</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">مبلمان خانگی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">دکوراسیون اداری</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">آینه</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">پرده</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">تابلو</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">ساعت دیواری و رومیزی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">شمع،گل و گلدان</li>
                                    </ul>
                                    <ul className="    whitespace-nowrap group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2  border-red-400">فرش ماشینی ، دست بافت ، تابلو</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">لوازم برقی خانگی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">ماشین لباسشویی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">ماشین ظرفشویی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">هود</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گاز صفحه ای </li>
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2 border-red-400">اجاق گاز</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">مایکروویو،مایکروفر</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">فر</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">جارو برقی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">جارو شارژی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">تلفن، بی سیم و سنترال</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">کولر،پنکه و تصفیه هوا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">قهوه و چایی ساز ، ابمیوه گیر</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">اتو بخار و پرسی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">حیوانات خانگی ، غذا ولوازم</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">آکواریوم، غذا و لوازم ابزیان</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2  border-red-400">سو و پذیرایی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">سرویس غذاخوری</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">قاشق،چنگال وکارد</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">پارچ،بطری،لیوان و ماگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">ظروف پذیرایی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">نور و روشنایی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">لامپ،چراغ و ریسه</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">لوستر و چراغ تزیینی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">آشپزخانه</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">سرویس و ظروف پخت و پز</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">فلاسک و کلمن</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">کتری،قوری،لوازم سرو چایی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">ظروف یکبار مصرف</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2 pr-2 border-red-400">مواد شوینده</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">شوینده ظروف</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">شوینده لباس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">تمیز کننده سطوح</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">دسمال کاغذی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">محفه،سرویس،لوازم خواب</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">پادری،کمد،لوازم اتاق خواب </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">لوازم دستشویی، روشویی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">فندک و لوازم جانبی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گل،خاک،کود،لوازم باغبانی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">کولر گازی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">جی پلاس </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">ایران رادیاتور</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">هایسنس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">کولر ابی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">ابسان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">برفسان </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">انرژی</li>
                                    </ul>
                                    </div>
                                </div>  
                            </li>
                            <li className="hoverli group">
                                <div><CheckroomOutlinedIcon /></div>
                                <p>مد و پوشاک</p>
                                <div className="absolute w-[800px] bg-white h-[672px] right-[190px] top-0 group-hover:text-black hidden group-hover:block ">
                                    <div className="py-4 pr-6 text-blue-400">
                                        <p className="">
                                            <ArrowBackIosIcon fontSize="" />
                                            <Link>مشاهده همه محصولات</Link>
                                        </p>
                                    </div>
                                <div className="flex-row-reverse  flex ">
                                    <ul className=" whitespace-nowrap ">
                                        <li className=" hover:text-red-600 py-[12px] mx-4 mr-2 text-sm border-r-2 pr-2 border-red-400"></li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">  </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">  </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> </li>
                                    </ul>
                                    <ul className="    whitespace-nowrap group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2  border-red-400"> </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">    </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">    </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"></li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"></li>
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2 border-red-400"></li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"></li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"></li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"></li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"></li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"></li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"></li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2  border-red-400">  </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">  </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">  </li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2 pr-2 border-red-400"> </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"></li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"></li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"></li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"></li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"></li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"></li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"></li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"></li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"></li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"></li>
                                    </ul>
                                    </div>
                                </div> 
                            </li>
                            <li className="hoverli group"> 
                                <div><ShoppingBasketOutlinedIcon /></div>
                                <p>کالای سوپرمارکتی</p>
                                <div className="absolute w-[800px] bg-white h-[672px] right-[190px] top-0 group-hover:text-black hidden group-hover:block ">
                                    <div className="py-4 pr-6 text-blue-400">
                                        <p className="">
                                            <ArrowBackIosIcon fontSize="" />
                                            <Link>مشاهده همه محصولات</Link>
                                        </p>
                                    </div>
                                <div className="flex-row-reverse  flex ">
                                    <ul className=" whitespace-nowrap ">
                                        <li className=" hover:text-red-600 py-[12px] mx-4 mr-2 text-sm border-r-2 pr-2 border-red-400">برندهای مختلف گوشی موبایل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی اپل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی سامسونگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی شیایومی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی نوکیا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی هواوی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی آنر</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی موتورولا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ریملی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ناتینگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ارد</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی جی پلاس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی وان پلاس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی جی ال ایکس</li>
                                    </ul>
                                    <ul className="    whitespace-nowrap group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2  border-red-400">گوشی برadadadadaddaت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 2 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 5 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 7 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 10 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی بالای 15 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2 border-red-400">گوشی براساس حافظه داخلی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 16 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 32 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 64 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 128 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 256 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 1 ترابایت</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2  border-red-400">رزولوشن عکس </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 13 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 16 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 48 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 64 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 108 مگاپیکسل</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2 pr-2 border-red-400">گوشی برا ساس کاربری</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی اقتصادی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی میان رده</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی دانش آموزی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی گیمینگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی پرچمدار</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ضدآب</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی مناسب عکاسی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">5G گوشی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">دو سیمکارت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">(اندروید) Android</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">IOS</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">سایر سیستم عامل ها</li>
                                    </ul>
                                    </div>
                                </div> 
                            </li>
                            <li className="hoverli group">
                                <div><DesignServicesOutlinedIcon /></div>
                                <p>کتاب، لوازم تحریروهنر</p>
                                <div className="absolute w-[800px] bg-white h-[672px] right-[190px] top-0 group-hover:text-black hidden z-20 group-hover:block ">
                                    <div className="py-4 pr-6 text-blue-400">
                                        <p className="">
                                            <ArrowBackIosIcon fontSize="" />
                                            <Link>مشاهده همه محصولات</Link>
                                        </p>
                                    </div>
                                <div className="flex-row-reverse  flex ">
                                    <ul className=" whitespace-nowrap ">
                                        <li className=" hover:text-red-600 py-[12px] mx-4 mr-2 text-sm border-r-2 pr-2 border-red-400">برندهای مختلف گوشی موبایل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی اپل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی سامسونگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی شیایومی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی نوکیا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی هواوی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی آنر</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی موتورولا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ریملی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ناتینگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ارد</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی جی پلاس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی وان پلاس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی جی ال ایکس</li>
                                    </ul>
                                    <ul className="    whitespace-nowrap group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2  border-red-400">گوشی برadadadadaddaت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 2 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 5 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 7 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 10 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی بالای 15 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2 border-red-400">گوشی براساس حافظه داخلی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 16 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 32 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 64 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 128 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 256 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 1 ترابایت</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2  border-red-400">رزولوشن عکس </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 13 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 16 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 48 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 64 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 108 مگاپیکسل</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2 pr-2 border-red-400">گوشی برا ساس کاربری</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی اقتصادی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی میان رده</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی دانش آموزی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی گیمینگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی پرچمدار</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ضدآب</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی مناسب عکاسی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">5G گوشی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">دو سیمکارت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">(اندروید) Android</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">IOS</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">سایر سیستم عامل ها</li>
                                    </ul>
                                    </div>
                                </div>  
                            </li>
                            <li className="hoverli group">
                                <div><ChildCareOutlinedIcon /></div>
                                <p>اسباب‌بازی،کودک ونوزاد</p>
                                <div className="absolute w-[800px] bg-white h-[672px] right-[190px] top-0 group-hover:text-black hidden z-20 group-hover:block ">
                                    <div className="py-4 pr-6 text-blue-400">
                                        <p className="">
                                            <ArrowBackIosIcon fontSize="" />
                                            <Link>مشاهده همه محصولات</Link>
                                        </p>
                                    </div>
                                <div className="flex-row-reverse  flex ">
                                    <ul className=" whitespace-nowrap ">
                                        <li className=" hover:text-red-600 py-[12px] mx-4 mr-2 text-sm border-r-2 pr-2 border-red-400">برندهای مختلف گوشی موبایل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی اپل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی سامسونگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی شیایومی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی نوکیا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی هواوی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی آنر</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی موتورولا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ریملی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ناتینگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ارد</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی جی پلاس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی وان پلاس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی جی ال ایکس</li>
                                    </ul>
                                    <ul className="    whitespace-nowrap group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2  border-red-400">گوشی برadadadadaddaت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 2 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 5 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 7 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 10 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی بالای 15 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2 border-red-400">گوشی براساس حافظه داخلی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 16 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 32 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 64 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 128 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 256 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 1 ترابایت</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2  border-red-400">رزولوشن عکس </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 13 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 16 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 48 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 64 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 108 مگاپیکسل</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2 pr-2 border-red-400">گوشی برا ساس کاربری</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی اقتصادی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی میان رده</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی دانش آموزی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی گیمینگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی پرچمدار</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ضدآب</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی مناسب عکاسی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">5G گوشی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">دو سیمکارت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">(اندروید) Android</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">IOS</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">سایر سیستم عامل ها</li>
                                    </ul>
                                    </div>
                                </div>  
                            </li>
                            <li className="hoverli group">
                                <div><FavoriteBorderOutlinedIcon /></div>
                                <p>زیبایی و سلامتی</p>
                                <div className="absolute w-[800px] bg-white h-[672px] right-[190px] top-0 group-hover:text-black hidden z-20 group-hover:block ">
                                    <div className="py-4 pr-6 text-blue-400">
                                        <p className="">
                                            <ArrowBackIosIcon fontSize="" />
                                            <Link>مشاهده همه محصولات</Link>
                                        </p>
                                    </div>
                                <div className="flex-row-reverse  flex ">
                                    <ul className=" whitespace-nowrap ">
                                        <li className=" hover:text-red-600 py-[12px] mx-4 mr-2 text-sm border-r-2 pr-2 border-red-400">برندهای مختلف گوشی موبایل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی اپل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی سامسونگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی شیایومی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی نوکیا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی هواوی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی آنر</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی موتورولا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ریملی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ناتینگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ارد</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی جی پلاس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی وان پلاس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی جی ال ایکس</li>
                                    </ul>
                                    <ul className="    whitespace-nowrap group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2  border-red-400">گوشی برadadadadaddaت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 2 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 5 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 7 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 10 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی بالای 15 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2 border-red-400">گوشی براساس حافظه داخلی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 16 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 32 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 64 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 128 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 256 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 1 ترابایت</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2  border-red-400">رزولوشن عکس </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 13 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 16 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 48 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 64 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 108 مگاپیکسل</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2 pr-2 border-red-400">گوشی برا ساس کاربری</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی اقتصادی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی میان رده</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی دانش آموزی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی گیمینگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی پرچمدار</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ضدآب</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی مناسب عکاسی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">5G گوشی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">دو سیمکارت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">(اندروید) Android</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">IOS</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">سایر سیستم عامل ها</li>
                                    </ul>
                                    </div>
                                </div>  
                            </li>
                            <li className="hoverli group">
                                <div><LuggageOutlinedIcon /></div>
                                <p>ورزش و سفر</p>
                                <div className="absolute w-[800px] bg-white h-[672px] right-[190px] top-0 group-hover:text-black hidden z-20 group-hover:block ">
                                    <div className="py-4 pr-6 text-blue-400">
                                        <p className="">
                                            <ArrowBackIosIcon fontSize="" />
                                            <Link>مشاهده همه محصولات</Link>
                                        </p>
                                    </div>
                                <div className="flex-row-reverse  flex ">
                                    <ul className=" whitespace-nowrap ">
                                        <li className=" hover:text-red-600 py-[12px] mx-4 mr-2 text-sm border-r-2 pr-2 border-red-400">برندهای مختلف گوشی موبایل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی اپل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی سامسونگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی شیایومی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی نوکیا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی هواوی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی آنر</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی موتورولا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ریملی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ناتینگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ارد</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی جی پلاس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی وان پلاس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی جی ال ایکس</li>
                                    </ul>
                                    <ul className="    whitespace-nowrap group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2  border-red-400">گوشی برadadadadaddaت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 2 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 5 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 7 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 10 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی بالای 15 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2 border-red-400">گوشی براساس حافظه داخلی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 16 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 32 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 64 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 128 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 256 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 1 ترابایت</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2  border-red-400">رزولوشن عکس </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 13 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 16 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 48 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 64 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 108 مگاپیکسل</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2 pr-2 border-red-400">گوشی برا ساس کاربری</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی اقتصادی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی میان رده</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی دانش آموزی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی گیمینگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی پرچمدار</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ضدآب</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی مناسب عکاسی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">5G گوشی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">دو سیمکارت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">(اندروید) Android</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">IOS</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">سایر سیستم عامل ها</li>
                                    </ul>
                                    </div>
                                </div>  
                            </li>
                            <li className="hoverli group" >
                                <div><BuildOutlinedIcon /></div>
                                <p>ابزارآلات و تجهیزات</p>
                                <div className="absolute w-[800px] bg-white h-[672px] right-[190px] top-0 group-hover:text-black hidden z-20 group-hover:block ">
                                    <div className="py-4 pr-6 text-blue-400">
                                        <p className="">
                                            <ArrowBackIosIcon fontSize="" />
                                            <Link>مشاهده همه محصولات</Link>
                                        </p>
                                    </div>
                                <div className="flex-row-reverse  flex ">
                                    <ul className=" whitespace-nowrap ">
                                        <li className=" hover:text-red-600 py-[12px] mx-4 mr-2 text-sm border-r-2 pr-2 border-red-400">برندهای مختلف گوشی موبایل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی اپل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی سامسونگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی شیایومی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی نوکیا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی هواوی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی آنر</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی موتورولا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ریملی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ناتینگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ارد</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی جی پلاس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی وان پلاس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی جی ال ایکس</li>
                                    </ul>
                                    <ul className="    whitespace-nowrap group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2  border-red-400">گوشی برadadadadaddaت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 2 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 5 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 7 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 10 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی بالای 15 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2 border-red-400">گوشی براساس حافظه داخلی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 16 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 32 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 64 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 128 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 256 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 1 ترابایت</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2  border-red-400">رزولوشن عکس </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 13 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 16 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 48 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 64 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 108 مگاپیکسل</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2 pr-2 border-red-400">گوشی برا ساس کاربری</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی اقتصادی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی میان رده</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی دانش آموزی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی گیمینگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی پرچمدار</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ضدآب</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی مناسب عکاسی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">5G گوشی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">دو سیمکارت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">(اندروید) Android</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">IOS</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">سایر سیستم عامل ها</li>
                                    </ul>
                                    </div>
                                </div>  
                            </li>
                            <li className="hoverli group">
                                <div><DirectionsCarFilledOutlinedIcon /></div>
                                <p>خودرو و موتورسیکلت</p>
                                <div className="absolute w-[800px] bg-white h-[672px] right-[190px] top-0 group-hover:text-black hidden z-20 group-hover:block ">
                                    <div className="py-4 pr-6 text-blue-400">
                                        <p className="">
                                            <ArrowBackIosIcon fontSize="" />
                                            <Link>مشاهده همه محصولات</Link>
                                        </p>
                                    </div>
                                <div className="flex-row-reverse  flex ">
                                    <ul className=" whitespace-nowrap ">
                                        <li className=" hover:text-red-600 py-[12px] mx-4 mr-2 text-sm border-r-2 pr-2 border-red-400">برندهای مختلف گوشی موبایل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی اپل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی سامسونگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی شیایومی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی نوکیا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی هواوی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی آنر</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی موتورولا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ریملی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ناتینگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ارد</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی جی پلاس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی وان پلاس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی جی ال ایکس</li>
                                    </ul>
                                    <ul className="    whitespace-nowrap group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2  border-red-400">گوشی برadadadadaddaت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 2 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 5 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 7 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 10 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی بالای 15 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2 border-red-400">گوشی براساس حافظه داخلی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 16 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 32 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 64 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 128 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 256 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 1 ترابایت</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2  border-red-400">رزولوشن عکس </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 13 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 16 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 48 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 64 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 108 مگاپیکسل</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2 pr-2 border-red-400">گوشی برا ساس کاربری</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی اقتصادی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی میان رده</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی دانش آموزی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی گیمینگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی پرچمدار</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ضدآب</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی مناسب عکاسی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">5G گوشی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">دو سیمکارت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">(اندروید) Android</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">IOS</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">سایر سیستم عامل ها</li>
                                    </ul>
                                    </div>
                                </div>  
                            </li>
                            <li className="hoverli group">
                                <div><GrassOutlinedIcon /></div>
                                <p>محصولات بومی و محلی</p>
                                <div className="absolute w-[800px] bg-white h-[672px] right-[190px] top-0 group-hover:text-black hidden z-20 group-hover:block ">
                                    <div className="py-4 pr-6 text-blue-400">
                                        <p className="">
                                            <ArrowBackIosIcon fontSize="" />
                                            <Link>مشاهده همه محصولات</Link>
                                        </p>
                                    </div>
                                <div className="flex-row-reverse  flex ">
                                    <ul className=" whitespace-nowrap ">
                                        <li className=" hover:text-red-600 py-[12px] mx-4 mr-2 text-sm border-r-2 pr-2 border-red-400">برندهای مختلف گوشی موبایل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی اپل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی سامسونگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی شیایومی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی نوکیا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی هواوی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی آنر</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی موتورولا</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ریملی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ناتینگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ارد</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی جی پلاس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی وان پلاس</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی جی ال ایکس</li>
                                    </ul>
                                    <ul className="    whitespace-nowrap group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2  border-red-400">گوشی برadadadadaddaت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 2 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 5 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 7 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 10 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی بالای 15 میلیون تومان</li>
                                        <li className=" hover:text-red-600 py-[10px] mx-5 text-sm border-r-2 pr-2 border-red-400">گوشی براساس حافظه داخلی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 16 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 32 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 64 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 128 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 256 گیگابایت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 1 ترابایت</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2  border-red-400">رزولوشن عکس </li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی تا 13 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 16 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 48 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 64 مگاپیکسل</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400"> گوشی تا 108 مگاپیکسل</li>
                                    </ul>
                                    <ul className="   whitespace-nowrap top-0  right-[190px] group-hover:text-black mr-2">
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-sm border-r-2 pr-2 border-red-400">گوشی برا ساس کاربری</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی اقتصادی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی میان رده</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی دانش آموزی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی گیمینگ</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی پرچمدار</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی ضدآب</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">گوشی مناسب عکاسی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">5G گوشی</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">دو سیمکارت</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">(اندروید) Android</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">IOS</li>
                                        <li className=" hover:text-red-600 py-[10px] px-5 text-xs text-gray-400">سایر سیستم عامل ها</li>
                                    </ul>
                                    </div>
                                </div>  
                            </li>
                        </ul>
                    
                    </div>

        </>
    )
}