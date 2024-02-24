import Image from "next/image";
import InputField from "./components/InputField";


export default function Home() {
  return (
    <main className="flex flex-row items-stretch h-screen bg-background-primary-default">  
    {/* Main container 100% VH */}

        {/* Left section */}
        <div className="flex w-full flex-1 justify-center items-center">

          {/* Form Container  */}
          <div className="flex flex-col justify-center items-stretch min-w-[416px]">

          {/* Email Input Field */}
          <InputField
            label="Email"
            name="email-input"
            type="email"
            isError={false}
          />

          {/* Password Input Field  */}
          <InputField
            label="Password"
            name="password-input"
            type="password"
            isError={false}
          />
          </div>
        </div>
      
        {/* Right section */}
        <div className="flex w-full flex-1 justify-center">
        </div>
    </main>
  );
}


