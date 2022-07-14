import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

function ProjectSmallModal({ tags, showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <AnimatePresence>
          <motion.div
            key="modal"
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-lg">
              {/*content*/}

              <div className="border-0 aspect-square rounded-2xl shadow-lg relative flex flex-col w-full bg-[url('../images/odd.png')] outline-none focus:outline-none">
                <div className='w-full h-full backdrop-blur-md bg-black bg-opacity-80 rounded-2xl'>
                  {/*Close*/}
                  <div className="flex items-start justify-between p-5 rounded-t">
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-white opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-white opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>

                  {/*body*/}
                  <div className="relative p-6 flex-auto text-center ">
                    <h3 className="text-2xl text-white font-semibold">
                      Modal Title
                    </h3>
                    <p className="my-4 text-white text-left text-md leading-relaxed">
                      I always felt like I could do anything. That’s the main
                      thing people are controlled by! Thoughts- their perception
                      of themselves! They're slowed down by their perception of
                      themselves. If you're taught you can’t do anything, you
                      won’t do anything. I was taught I could do everything.
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-start p-6 rounded-b">
                    <ul className="font-roboto-mono text-xs text-blue-gray flex flex-wrap justify-start self-end mt-auto gap-2">
                      {tags != null && tags.map((tag, index) => (
                        <li
                          key={index}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </AnimatePresence>
      ) : null}
    </>
  );
}

export default ProjectSmallModal;