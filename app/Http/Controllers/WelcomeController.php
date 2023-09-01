<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    public function index()
    {
        return view('pages.home');
    }
    // public function about()
    // {
    //     return view('pages.about');
    // }
    // public function feature()
    // {
    //     return view('pages.feature');
    // }
    // public function portfolio()
    // {
    //     return view('pages.portfolio');
    // }
    // public function team()
    // {
    //     return view('pages.team');
    // }
    // public function contact()
    // {
    //     return view('pages.contact');
    // }
    // public function faq()
    // {
    //     return view('pages.faq');
    // }
    // public function android()
    // {
    //     return view('pages.android');
    // }
    // public function software()
    // {
    //     return view('pages.software');
    // }
    // public function web()
    // {
    //     return view('pages.web');
    // }
    // public function logo()
    // {
    //     return view('pages.logo');
    // }
    // public function ui_designing()
    // {
    //     return view('pages.ui_designing');
    // }
    // public function seo_services()
    // {
    //     return view('pages.seo_services');
    // }
    // public function digital_marketing()
    // {
    //     return view('pages.digital_marketing');
    // }
    // public function disclaimerprivacy_policy()
    // {
    //     return view('pages.disclaimer');
    // }
    // public function privacy_policy()
    // {
    //     return view('pages.privacy_policy');
    // }
    // public function refund_policy()
    // {
    //     return view('pages.refund_policy');
    // }
}