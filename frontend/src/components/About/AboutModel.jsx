import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import Education from './EducationModel'
function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        <Education/>
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
