<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resend - Email API pour développeurs</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-black text-white">
    
    <nav class="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-zinc-800 z-50">
        <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-10">
                    <a href="#" class="text-xl font-semibold">Resend</a>
                    <div class="hidden md:flex items-center gap-6 text-sm text-gray-400">
                        <a href="#" class="hover:text-white">Features</a>
                        <a href="#" class="hover:text-white">Company</a>
                        <a href="#" class="hover:text-white">Resources</a>
                        <a href="#" class="hover:text-white">Help</a>
                        <a href="#" class="hover:text-white">Docs</a>
                        <a href="#" class="hover:text-white">Pricing</a>
                    </div>
                </div>
                <a href="#" class="px-4 py-2 bg-white text-black text-sm font-medium rounded-md hover:bg-gray-200">
                    Get Started
                </a>
            </div>
        </div>
    </nav>

    <section class="pt-40 pb-20 px-6">
        <div class="max-w-5xl mx-auto text-center">
            <h1 class="text-7xl md:text-8xl font-bold mb-8">Email for<br/>developers</h1>
            <p class="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
            </p>
            <div class="flex gap-4 justify-center">
                <a href="#" class="px-6 py-3 bg-white text-black font-medium rounded-md">Get Started</a>
                <a href="#" class="px-6 py-3 border border-gray-800 rounded-md">Documentation</a>
            </div>
        </div>
        
        <div class="max-w-6xl mx-auto mt-20">
            <p class="text-center text-sm text-gray-600 mb-10">Companies of all sizes trust Resend to deliver their most important emails.</p>
            <div class="flex flex-wrap justify-center items-center gap-12 opacity-40 text-lg font-semibold">
                <span>Vercel</span><span>Clerk</span><span>Dub</span><span>cal.com</span><span>Supabase</span><span>Perplexity</span>
            </div>
        </div>
    </section>

    <section class="py-20 px-6">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-5xl font-bold text-center mb-6">Integrate this weekend</h2>
            <p class="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                A simple, elegant interface so you can start sending emails in minutes. It fits right into your code with SDKs for your favorite programming languages.
            </p>
            
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
                    <div class="bg-zinc-950 px-4 py-3 border-b border-zinc-800 flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div class="p-6 text-sm font-mono">
                        <div class="text-green-400">// Exemple simple d'envoi d'email</div>
                        <div class="mt-2"><span class="text-purple-400">const</span> resend = <span class="text-purple-400">new</span> <span class="text-yellow-300">Resend</span>(<span class="text-green-300">'your_key'</span>);</div>
                        <div class="mt-2"><span class="text-purple-400">await</span> resend.emails.send({</div>
                        <div class="pl-4">from: <span class="text-green-300">'hello@example.com'</span>,</div>
                        <div class="pl-4">to: <span class="text-green-300">'user@example.com'</span>,</div>
                        <div class="pl-4">subject: <span class="text-green-300">'Hello World'</span></div>
                        <div>});</div>
                    </div>
                </div>
                
                <div class="grid grid-cols-3 gap-3">
                    <div class="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center hover:bg-zinc-800 cursor-pointer">
                        <div class="text-2xl mb-2">📦</div>
                        <div class="text-sm">Node.js</div>
                    </div>
                    <div class="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center hover:bg-zinc-800 cursor-pointer">
                        <div class="text-2xl mb-2">🐍</div>
                        <div class="text-sm">Python</div>
                    </div>
                    <div class="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center hover:bg-zinc-800 cursor-pointer">
                        <div class="text-2xl mb-2">💎</div>
                        <div class="text-sm">Ruby</div>
                    </div>
                    <div class="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center hover:bg-zinc-800 cursor-pointer">
                        <div class="text-2xl mb-2">🐘</div>
                        <div class="text-sm">PHP</div>
                    </div>
                    <div class="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center hover:bg-zinc-800 cursor-pointer">
                        <div class="text-2xl mb-2">🦀</div>
                        <div class="text-sm">Rust</div>
                    </div>
                    <div class="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center hover:bg-zinc-800 cursor-pointer">
                        <div class="text-2xl mb-2">☕</div>
                        <div class="text-sm">Java</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20 px-6 bg-zinc-950">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-5xl font-bold text-center mb-6">First-class developer experience</h2>
            <p class="text-xl text-gray-400 text-center mb-16">We are a team of engineers who love building tools for other engineers</p>
            
            <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                    <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 text-2xl">⚡</div>
                    <h3 class="text-xl font-bold mb-3">Fast delivery</h3>
                    <p class="text-gray-400">Send emails from the region closest to your users for minimal latency</p>
                </div>
                <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                    <div class="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-2xl">🔒</div>
                    <h3 class="text-xl font-bold mb-3">Secure by default</h3>
                    <p class="text-gray-400">Built with security best practices from day one</p>
                </div>
                <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                    <div class="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 text-2xl">📊</div>
                    <h3 class="text-xl font-bold mb-3">Real-time analytics</h3>
                    <p class="text-gray-400">Track opens, clicks, bounces and more in real-time</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20 px-6">
        <div class="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-12">
            <div class="flex items-start gap-6">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                <div>
                    <p class="text-xl mb-6">"Resend is transforming email for developers. Simple interface, easy integrations, handy templates. What else could we ask for."</p>
                    <div class="font-semibold">Guillermo Rauch</div>
                    <div class="text-gray-400 text-sm">CEO at Vercel</div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20 px-6">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-5xl font-bold mb-6">Email reimagined. Available today.</h2>
            <div class="flex gap-4 justify-center">
                <a href="#" class="px-8 py-4 bg-white text-black font-medium rounded-md">Get Started</a>
                <a href="#" class="px-8 py-4 border border-gray-800 rounded-md">Contact Us</a>
            </div>
        </div>
    </section>

    <footer class="border-t border-zinc-800 py-12 px-6">
        <div class="max-w-7xl mx-auto">
            <div class="grid md:grid-cols-5 gap-8 mb-8 text-sm">
                <div>
                    <div class="font-semibold mb-4">Product</div>
                    <div class="space-y-2 text-gray-400">
                        <div>Features</div>
                        <div>Pricing</div>
                        <div>Changelog</div>
                    </div>
                </div>
                <div>
                    <div class="font-semibold mb-4">Developers</div>
                    <div class="space-y-2 text-gray-400">
                        <div>Documentation</div>
                        <div>API Reference</div>
                        <div>SDKs</div>
                    </div>
                </div>
                <div>
                    <div class="font-semibold mb-4">Resources</div>
                    <div class="space-y-2 text-gray-400">
                        <div>Blog</div>
                        <div>Support</div>
                        <div>Community</div>
                    </div>
                </div>
                <div>
                    <div class="font-semibold mb-4">Company</div>
                    <div class="space-y-2 text-gray-400">
                        <div>About</div>
                        <div>Careers</div>
                        <div>Contact</div>
                    </div>
                </div>
                <div>
                    <div class="font-semibold mb-4">Legal</div>
                    <div class="space-y-2 text-gray-400">
                        <div>Privacy</div>
                        <div>Terms</div>
                        <div>Security</div>
                    </div>
                </div>
            </div>
            <div class="border-t border-zinc-800 pt-8 text-sm text-gray-400 text-center">
                © 2026 Resend. All rights reserved.
            </div>
        </div>
    </footer>

</body>
</html>
