import { useForm } from "react-hook-form";

export default function AgentForm() {
  const { register, handleSubmit, reset, watch } = useForm();

  function agentSubmit(agenData) {
    console.log(agenData);

    reset();
  }

  const profileImage = watch("avatar");

  console.log(profileImage);

  return (
    <>
      <section className="w-screen h-screen flex justify-center items-center bg-slate-900/30 backdrop-blur-[5px]">
        <form
          className="px-26.25 py-21.75 bg-white rounded-[10px] flex flex-col justify-center items-center gap-15.25"
          onSubmit={handleSubmit(agentSubmit)}
        >
          <h2 className="text-[32px] font-bold">აგენტის დამატება</h2>

          <div className="flex flex-col gap-7">
            <div className="flex gap-7.75">
              <div className="flex flex-col">
                <label htmlFor="name">სახელი*</label>
                <input
                  className="border w-[384px] rounded-md p-2.5 my-1.25"
                  type="text"
                  id="name"
                  {...register("name")}
                />
                <span>მინიმუმ ორი სიმბოლო</span>
              </div>
              <div className="flex flex-col">
                <label htmlFor="surname">გვარი*</label>
                <input
                  className="border w-[384px] rounded-md p-2.5 my-1.25"
                  type="text"
                  id="surname"
                  {...register("surname")}
                />
                <span>მინიმუმ ორი სიმბოლო</span>
              </div>
            </div>

            <div className="flex gap-7.75">
              <div className="flex flex-col">
                <label htmlFor="email">ელ-ფოსტა*</label>
                <input
                  className="border w-[384px] rounded-md p-2.5 my-1.25"
                  type="text"
                  id="email"
                  {...register("email")}
                />
                <span>გამოიყენეთ @redberry.ge ფოსტა</span>
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone">ტელეფონის ნომერი*</label>
                <input
                  className="border w-[384px] rounded-md p-2.5 my-1.25"
                  type="text"
                  id="phone"
                  {...register("phone")}
                />
                <span>მხოლოდ რიცხვები</span>
              </div>
            </div>

            <div>
              <label htmlFor="avatar">ატვირთე ფოტო*</label>
              <div className="border h-30 rounded-md flex items-center justify-center">
                {profileImage?.[0] ? (
                  ""
                ) : (
                  <label className="border rounded-full px-2" htmlFor="avatar">
                    +
                  </label>
                )}
                {profileImage?.[0] && (
                  <img
                    className="h-full"
                    src={`${URL.createObjectURL(profileImage?.[0])}`}
                    alt="avatar"
                  />
                )}

                <input className="hidden" type="file" name="" id="avatar" {...register("avatar")} />
              </div>
            </div>
          </div>

          <div className="flex w-full justify-end gap-3.75">
            <button
              className="border py-2.5 px-4 rounded-[10px] text-[#F93B1D] border-[#F93B1D]"
              type="button"
            >
              გაუქმება
            </button>
            <button className="border border-[#F93B1D] py-2.5 px-4 text-white bg-[#F93B1D] rounded-[10px]">
              დაამატე აგენტი
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
