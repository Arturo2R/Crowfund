import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import { useGetRewards } from "../../hooks/useRequest";
import Button from "../Button";
import CardOfModal from "./CardOfModal";
// @ts-ignore
import Close from "/src/images/icon-close-modal.svg";

export default function MyModal(props) {
  const { data, error, isLoading, isSuccess } = useGetRewards();

  const [open, setOpen] = React.useState(false);
  const cancelButtonRef = React.useRef();

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }

  return (
    <>
      <div onClick={openModal} className="">
        <Button text="Back this project" />
      </div>
      <Transition show={open} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          initialFocus={cancelButtonRef}
          static
          open={open}
          onClose={closeModal}
        >
          <div className="min-h-screen  md:px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-[48rem] p-6 md:p-12 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-black leading-6 text-gray-900"
                >
                  {props.titulo}
                </Dialog.Title>
                <div className="mt-4 my-8">
                  <p className="text-base font-medium text-gray-500">
                    {props.description}
                  </p>
                </div>

                <div className="space-y-3 flex">
                  <form action="" className="space-y-4">
                    {error && <h1>Something went wrong!</h1>}
                    {isLoading && <h1>Loading...</h1>}

                    {isSuccess &&
                      data.map((item) => (
                        <CardOfModal
                          title={item.name}
                          pledgeQuantity={item.minimunPledge}
                          availability={item.quantityLeft}
                          description={item.description}
                          disabled={item.agotado}
                          key={item.id}
                          value="lala"
                          closeFunction={closeModal}
                        />
                      ))}

                    {/* <CardOfModal
                      title="Pledge With No Reward"
                      value="no-reward"
                      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellat repellendus dolorum sequi nisi vel voluptatessuscipit iste nesciunt ut, quaerat, maxime, quisquam eumvoluptatum amet maiores ipsa obcaecati. Praesentium,voluptatem?"
                    />
                    <CardOfModal
                      title="Bamboo Stand"
                      value="bamboo-stand"
                      pledgeQuantity="25"
                      availability="101"
                      description="You get and ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
                    />
                    <CardOfModal
                      title="Black Edition Stand"
                      pledgeQuantity="75"
                      availability="64"
                      description="You get a Black Special Edition computer stand and a personal thank you. You will be added to a special Backer member list. Shipping is included."
                      value="black-edition-stand"
                    />
                    <CardOfModal
                      value="mahogany-special-edition"
                      pledgeQuantity="200"
                      availability="0"
                      description="You get two special edition Mahogany stands, a Backer T-shirt, and a personal thank you. You will be added to our Backer member list. Shipping is included"
                      disabled
                    /> */}
                  </form>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="absolute top-5 right-9 px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    <img src={Close} alt="cerrar" />
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
