<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function sendMessage(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:100',
            'last_name' => 'required|string|max:100',
            'email' => 'required|email',
            'phone' => 'required|string|max:20',
            'comments' => 'required|string',
        ]);

        $data = [
            'name' => $validated['first_name'] . ' ' . $validated['last_name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'comments' => $validated['comments'],
        ];

        Mail::send('emails.contact', $data, function ($message) use ($data) {
            $message->to('manager@duroobomantours.com')
                    ->subject('New Contact Message from Duroob Oman Tours')
                    ->replyTo($data['email']);
        });

        return response()->json(['message' => 'Message sent successfully!'], 200);
    }
}
