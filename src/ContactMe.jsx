import React from 'react'

const ContactMe = () => {
  return (
<div className="relative">
  <form
    onSubmit={(e) => {
      e.preventDefault();

      // Show success alert
      alert("✅ Form submitted successfully!");

      e.target.reset();
    }}
    className="text-white h-[80vh] flex justify-center items-center gap-60"
  >
    <div className="flex flex-col gap-8">
      <label className="text-[30px]">Name :</label>

      <input
        type="text"
        required
        className="border-[2px] p-[20px] h-[8vh] w-[20vw] rounded-xl border-white hover:border-[2px] hover:border-black focus:border-green-300 focus:shadow-[0_0_100px_green] focus:outline-none hover:scale-110 transition-all duration-300"
      />

      <label className="text-[30px]">Email-id :</label>

      <input
        type="email"
        required
        className="border-[2px] p-[20px] h-[8vh] w-[20vw] rounded-xl border-white hover:border-[2px] hover:border-black focus:border-green-300 focus:shadow-[0_0_100px_green] focus:outline-none hover:scale-110 transition-all duration-300"
      />

      <label className="text-[30px]">Phone.No :</label>

      <input
        type="tel"
        maxLength={10}
        inputMode="numeric"
        required
        onInput={(e) => {
          e.target.value = e.target.value.replace(/\D/g, "");
        }}
        className="border-[2px] p-[20px] h-[8vh] w-[20vw] rounded-xl border-white hover:border-[2px] hover:border-black focus:border-green-300 focus:shadow-[0_0_100px_green] focus:outline-none hover:scale-110 transition-all duration-300"
      />
    </div>

    <div className="flex flex-col gap-20 items-center">
      <label className="text-[30px] ml-[-40px]">
        Describe About YourSelf :
      </label>

      <textarea
        required
        className="border-[2px] p-[20px] h-[30vh] w-[20vw] rounded-xl hover:border-[3px] hover:border-black focus:border-green-300 focus:shadow-[0_0_100px_green] focus:outline-none hover:scale-110 transition-all duration-300 border-white"
      ></textarea>

      <button
        type="submit"
        className="border-[2px] p-[20px] h-[8vh] w-[15vw] bg-zinc-800 pb-[40px] font-semibold text-xl rounded-xl border-none hover:border-[2px] hover:border-black focus:border-green-300 focus:shadow-[0_0_100px_green] focus:outline-none hover:scale-110 transition-all duration-300"
      >
        Submit
      </button>
    </div>
  </form>
</div>
  )
}

export default ContactMe
