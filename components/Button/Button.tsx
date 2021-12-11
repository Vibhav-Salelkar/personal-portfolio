export default function Button({name, btnFunctionality=null}) {
    return (
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-vstext to-vstext2" onClick={btnFunctionality} >
        {name}
      </button>
    )
}
