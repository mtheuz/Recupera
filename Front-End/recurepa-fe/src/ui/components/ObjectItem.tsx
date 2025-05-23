import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  image?: string;
  title?: string;
  description?: string;
  date?: string;
  local?: string;
}

function ObjectItem({
  date = "00/00/0000",
  image = "/default-image.jpg",
  title = "Title",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia cumque dolorem vitae tenetur...",
  local = "Modulo 7",
}: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        onClick={handleOpen}
        className="cursor-pointer w-[358px] h-auto bg-[#DAF1DE] shadow-xl drop-shadow-md rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
      >
        {/* Imagem */}
        <div className="overflow-hidden border-b-4 border-[#235347]">
          <img
            src={image}
            alt="Imagem de exemplo"
            className="w-full h-[186px] object-cover object-center"
          />
        </div>

        {/* Conteúdo */}
        <div className="p-4 text-[#235347]">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="text-sm">{date}</p>
          </div>
          <p className="mt-2 text-base">{description}</p>
        </div>
      </div>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#C0D0C3] p-6 rounded-xl shadow-2xl w-full max-w-2xl outline-none">
          <div className="flex justify-between">
            <h2 id="modal-modal-title" className="text-2xl font-bold text-[#235347] mb-4">
              {title}
            </h2>
  
              <CloseIcon onClick={handleClose} sx={{color : "#235347"}}  className="cursor-pointer"/>
          </div>
          <img src={image} alt={title} className="w-full h-72 object-cover rounded-md mb-4" />
          <p id="modal-modal-description" className="text-gray-700">
            <span className="font-bold">Descrição: </span>{description}
          </p>
          <p id="modal-modal-description" className="text-gray-700">
            <span className="font-bold">Local: </span>{local}
          </p>
          <p className="text-sm text-gray-500 mt-2 mb-4">Publicado em: {date}</p>
              <Button onClick={handleClose}  variant="contained" className="flex justify-ce roundend-md !bg-[#235347] hover:!bg-[#1b4036] w-full" >
                Entrar em contato
              </Button>
          <div className="flex justify-end mt-4">
            
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default ObjectItem;
