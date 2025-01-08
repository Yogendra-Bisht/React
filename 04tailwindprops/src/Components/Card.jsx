import React from 'react'

function card(props) {
  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src={props.link}
          alt="Error to load the picture"
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{props.userName}</h2>
            <p className="text-gray-400">
              {props.about}
              </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            Read more
          </button>
        </div>
      </div>
  )
}

export default card