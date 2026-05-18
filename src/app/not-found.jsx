"use client";

import React from "react";
import Link from "next/link";

const Notfound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-slate-100 px-4">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-slate-200 bg-white/80 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl">

        {/* decorative blur */}
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-sky-200/40 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl"></div>

        <div className="relative z-10 text-center">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-4xl font-bold text-white shadow-xl">
            404
          </div>

          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Lost in the news?
          </h1>

          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-600">
            The page you’re looking for doesn’t exist or may have been moved to
            another location.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800"
            >
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:bg-slate-50"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfound;