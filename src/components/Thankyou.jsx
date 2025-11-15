import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function ThankYou() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Simulate redirect countdown
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: "#ece4d9" }}
    >
      <div
        className={`max-w-md w-full transition-all duration-700 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Card Container */}
        <div
          className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden"
          style={{ backgroundColor: "#f5f1ec" }}
        >
          {/* Decorative background elements */}
          <div
            className="absolute top-0 right-0 w-40 h-40 rounded-full -mr-20 -mt-20 opacity-20"
            style={{ backgroundColor: "#574d41" }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-32 h-32 rounded-full -ml-16 -mb-16 opacity-20"
            style={{ backgroundColor: "#574d41" }}
          ></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Animated Success Icon */}
            <div className="inline-flex items-center justify-center mb-6">
              <div
                className={`transition-all duration-500 ${
                  isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
                }`}
              >
                <CheckCircle
                  className="w-20 h-20"
                  style={{ color: "#574d41" }}
                  strokeWidth={2}
                />
              </div>
            </div>

            {/* Title */}
            <h1
              className="text-4xl font-bold mb-3"
              style={{ color: "#574d41" }}
            >
              Thank You!
            </h1>

            {/* Subtitle */}
            <p className="text-lg mb-2" style={{ color: "#6b5f52" }}>
              Your form has been submitted successfully.
            </p>

            <p className="text-sm mb-8" style={{ color: "#8a7d6f" }}>
              We've received your information and will get back to you soon.
            </p>

            {/* Divider */}
            <div
              className="w-16 h-1 mx-auto mb-8 rounded-full"
              style={{ backgroundColor: "#574d41" }}
            ></div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <p className="text-sm font-medium" style={{ color: "#6b5f52" }}>
                Redirecting in {Math.ceil((100 - progress) / 20)} seconds...
              </p>
              <div
                className="w-full rounded-full h-2 overflow-hidden"
                style={{ backgroundColor: "#e5ddd1" }}
              >
                <div
                  className="h-2 rounded-full transition-all duration-300 ease-linear"
                  style={{ width: `${progress}%`, backgroundColor: "#574d41" }}
                ></div>
              </div>
            </div>

            {/* Additional Info */}
            <div
              className="mt-8 pt-6 border-t"
              style={{ borderColor: "#e5ddd1" }}
            >
              <p className="text-xs" style={{ color: "#8a7d6f" }}>
                Need help? Contact us at{" "}
                <span className="font-medium" style={{ color: "#574d41" }}>
                  info@amravatigroup.in
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "#574d41", opacity: 0.4 }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full animate-pulse delay-100"
            style={{ backgroundColor: "#574d41", opacity: 0.3 }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full animate-pulse delay-200"
            style={{ backgroundColor: "#574d41", opacity: 0.4 }}
          ></div>
        </div>
      </div>
    </div>
  );
}
