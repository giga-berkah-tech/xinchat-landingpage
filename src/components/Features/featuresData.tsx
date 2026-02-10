import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      // <svg viewBox="0 0 32 32" aria-hidden="true" className="fill-current">

      //   <path
      //     fillRule="evenodd"
      //     clipRule="evenodd"
      //     d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
      //   />
      //   <path
      //     fillRule="evenodd"
      //     clipRule="evenodd"
      //     d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
      //   />
      // </svg>

      <svg
        className="fill-current"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="fill-current"
          cx={16}
          cy={16}
          r={16}
          fillOpacity={0.2}
        />
        <g transform="translate(4,4)">
          <path
            d="M21.75 18.75H11.25L5.25 23.25V18.75H2.25C1.85217 18.75 1.47064 18.592 1.18934 18.3107C0.908035 18.0294 0.75 17.6478 0.75 17.25V2.25C0.75 1.85217 0.908035 1.47064 1.18934 1.18934C1.47064 0.908035 1.85217 0.75 2.25 0.75H21.75C22.1478 0.75 22.5294 0.908035 22.8107 1.18934C23.092 1.47064 23.25 1.85217 23.25 2.25V17.25C23.25 17.6478 23.092 18.0294 22.8107 18.3107C22.5294 18.592 22.1478 18.75 21.75 18.75Z"
            stroke="#31a354"
            fillOpacity={0.2}
            viewBox="0 0 16 16"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.62196 7.22804C9.43749 6.86274 9.15618 6.55494 8.80856 6.33841C8.45399 6.11756 8.04462 6.00049 7.6269 6.00049C7.20917 6.00049 6.7998 6.11756 6.44523 6.33841C6.09761 6.55494 5.8163 6.86274 5.63184 7.22804"
            stroke="#31a354"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.627 7.22737C14.8114 6.86236 15.0926 6.55481 15.44 6.33841C15.7946 6.11756 16.2039 6.00049 16.6217 6.00049C17.0394 6.00049 17.4488 6.11756 17.8033 6.33841C18.1507 6.55481 18.4319 6.86236 18.6164 7.22737"
            stroke="#31a354"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.9753 12.7687C14.9195 13.722 13.5472 14.2502 12.1239 14.2502C10.7006 14.2502 9.32833 13.722 8.27246 12.7687"
            stroke="#31a354"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    ),

    title: "AI Chat",
    paragraph:
      "Think of this as your personal creative partner and researcher. Whether you need to draft a client proposal, debug code, or brainstorm marketing copy, the AI provides instant, intelligent support to keep your momentum going.",
  },
  {
    id: 2,
    icon: (
      <svg
        viewBox="0 0 32 32"
        // className="fill-current"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="fill-current"
          cx={16}
          cy={16}
          r={16}
          fillOpacity={0.2}
        />
        <g transform="translate(4,4)">
          <path
            d="M17.25 23.25C20.5637 23.25 23.25 20.5637 23.25 17.25C23.25 13.9363 20.5637 11.25 17.25 11.25C13.9363 11.25 11.25 13.9363 11.25 17.25C11.25 20.5637 13.9363 23.25 17.25 23.25Z"
            stroke="#31a354"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.25 14.25V20.25"
            stroke="#31a354"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.25 17.25H20.25"
            stroke="#31a354"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.75 6.75H14.25"
            stroke="#31a354"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.75 11.25H9.75"
            stroke="#31a354"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.75 15.75H7.5"
            stroke="#31a354"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 20.25H2.25C1.85218 20.25 1.47064 20.092 1.18934 19.8107C0.908035 19.5294 0.75 19.1478 0.75 18.75V2.25C0.75 1.85218 0.908035 1.47064 1.18934 1.18934C1.47064 0.908035 1.85218 0.75 2.25 0.75H12.879C13.2765 0.750085 13.6578 0.907982 13.939 1.189L16.811 4.061C17.092 4.3422 17.2499 4.72345 17.25 5.121V7.58594"
            stroke="#31a354"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    ),
    title: "Invoice Creator",
    paragraph:
      "Built specifically for the modern freelancer. Quickly turn your billable hours into professional, branded invoices. Manage your payments, track what's due, and keep your business running smoothly without the administrative headache.",
  },
  {
    id: 3,
    icon: (
      <svg
        viewBox="0 0 32 32"
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="fill-current"
          cx={16}
          cy={16}
          r={16}
          fillOpacity={0.2}
        />
        <g transform="translate(4,4)">
          <path d="M3,16V6A1,1,0,0,1,4,5h7V3a1,1,0,0,1,2,0V5h7a1,1,0,0,1,1,1V16a1,1,0,0,1-1,1H16.118L17.9,20.553a1,1,0,1,1-1.79.894l-2-4a.982.982,0,0,1-.1-.447H13v3a1,1,0,0,1-2,0V17H9.99a.982.982,0,0,1-.1.447l-2,4a1,1,0,1,1-1.79-.894L7.882,17H4A1,1,0,0,1,3,16Z" />
        </g>
      </svg>
    ),
    title: "Canvas",
    paragraph:
      'The ultimate space for visual thinking. From mind-mapping your next big project to sketching out rough prototypes, this infinite workspace allows you to organize your thoughts and see the "big picture" clearly.',
  },
];
export default featuresData;
