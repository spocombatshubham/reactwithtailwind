

export default function Frontpage() {
  function changecolor(colname) {
    document.querySelector("body").style.backgroundColor = colname;
  }

  return (
    <>
      <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <button
          onClick={() => changecolor("black")}
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Black
        </button>
        <button
          onClick={() => changecolor("yellow")}
          type="button"
          className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        >
          Yellow
        </button>
        <button
          onClick={() => changecolor("red")}
          type="button"
          className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Red
        </button>
        <button
          onClick={() => changecolor("green")}
          type="button"
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Green
        </button>
      </div>
    </>
  );
}
