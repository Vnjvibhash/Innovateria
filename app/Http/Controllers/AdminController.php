<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function login()
    {
        return view('auths.login');
    }
    public function register()
    {
        return view('auths.register');
    }
    
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function create(Request $request)
    // {
    //     $this->validate($request, [
    //         'name' => 'required|string',
    //         'email' => 'required|email|unique:users',
    //         'phone' => 'required|string|min:10|max:10',
    //         'password' => 'required|string|confirmed|min:8',
    //     ]);
    //     $usep= User::where('phone',$request->phone)->where('role_id',3)->first();

	// 	if($usep){
	// 	//return back()->with('flash_error', 'Phone Number Already Taken');
	// 	}

    //     $user = User::create([
    //         'name' => $request->name,
    //         'email' => $request->email,
    //         'phone' => $request->phone,
    //         'password' => bcrypt($request->password),
    //         'role_id' => 3,
    //         'status' => 'Active'
    //     ]);


	// 	    $phone = $user->phone;
    //         $otp_code = mt_rand(100000, 999999);
    //         $username = "Subbisky";
    //         $password = "dev@1008";
    //         $sender = "SUBBIO";
    //         $template_id='1507163240649323671';
    //         $message = "Dear user, your OTP number is  " . $otp_code ." Regards Subbisky www.subbisky.com";
    //         $url="https://login.bulksmsgateway.in/sendmessage.php?user=".urlencode($username)."&password=".urlencode($password)."&mobile=".urlencode($phone)."&sender=".urlencode($sender)."&message=".urlencode($message)."&type=".urlencode('3')."&template_id=".urlencode($template_id);
    //         $ch = curl_init($url);
    //         curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	// 	    $curl_scraped_page = curl_exec($ch);
    //         //echo $curl_scraped_page = curl_exec($ch);
    //         curl_close($ch);

    //         $user->verifyOtp = $otp_code;
    //         $user->save();

	// 	Mail::to($user->email)->send(new VerifyMail($user));
	// 	return view('verify-account',compact('user'));
    //     //return back()->with('flash_success', 'Your Seller account is created you will be notified by admin once it approved');
    // }
    
    // public function check(Request $request)
    // {
    //     $this->validate($request, [
    //         'email' => 'required',
    //         'password' => 'required',
    //     ]);

    //     $credentials = [
    //         'email' => $request['email'],
    //         'password' => $request['password'],
    //     ];

    //     $user=User::where('email',$request->email)->first();
	// 	if($user){
	// 	if($user->verify=="No"){
	// 	return view('verify-account',compact('user'));
	// 	}
	// 	}
    //     if (Auth::attempt($credentials) && Auth::user()->role_id == 3) {

    //         if(auth::user()->status =="Active"){
    //             if (isset($_REQUEST['return']) && $_REQUEST['return'] != '') {
    //                 return redirect($_REQUEST['return']);
    //             }
    //             else{
    //                 return redirect('/');
    //             }
    //         }else{
    //             Auth::logout();
    //             return back()->with('flash_error', 'Email, Password is incorrect');
    //         }
    //     }else{
    //         Auth::logout();
    //         return back()->with('flash_error', 'Email, Password is incorrect');
    //     }
    // }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}