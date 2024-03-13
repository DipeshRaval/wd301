// First we will import Dialog and Transition component from '@headlessui/react'
import { Dialog, Transition } from '@headlessui/react';
// Next we will import Fragment and useState component from 'react'
import { Fragment, useState } from 'react'
import { addProject } from '../../context/projects/actions';
import { useProjectsDispatch } from "../../context/projects/context";
// react form hook
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
type Inputs = {
  name: string
};

const NewProject = () => {
  const {t} = useTranslation()
  let [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState(null)

  // Then we add the openModal function.
  const openModal = () => setIsOpen(true)

  // Then we add the closeModal function
  const closeModal = () => setIsOpen(false)
  const dispatchProjects = useProjectsDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  // We will define a handleSubmit function to process form data on submission
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // Next, we will destructure the data object to access name field value
    const {name} = data;
    const response = await addProject(dispatchProjects, { name })
    if(response.ok)
    {
      setIsOpen(false)
    }else{
      setError(response.error as React.SetStateAction<null>)
    }
  };

  return (
    <>
      <button
        type="button"
        id='newProjectBtn'
        onClick={openModal}
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        New Project
        {t('newProjectButtonText')}
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create new project
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {/* I'll show the error, if it exists.*/}
                      {error &&
                        <span>{error}</span>
                      }
                      <input
                        type="text"
                        id='name'
                        placeholder='Enter project name...'
                        autoFocus
                        {...register('name', { required: true })}
                        className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
                          errors.name ? 'border-red-500' : ''
                        }`}
                      />
                      {errors.name && <span>This field is required</span>}
                      <button type="submit" id='submitNewProjectBtn' className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                        Submit
                      </button>
                      <button type="submit" onClick={closeModal} className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                        Cancel
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
export default NewProject;
