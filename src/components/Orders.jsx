import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Button, useDisclosure, Table, Thead, Tbody, Tr, Th, Td, Flex, Spacer } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import SaleOrderModal from './SaleOrderModal';
import ThemeToggle from './ThemeToggle';

const Orders = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box p={4}>
            <Flex justify="space-between" mb={4}>
                <ThemeToggle />
            </Flex>
            <Tabs variant="soft-rounded" colorScheme="teal">
                <TabList>
                    <Tab>Active Sale Orders</Tab>
                    <Tab>Completed Sale Orders</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Flex mb={4}>
                            <Spacer />
                            <Button onClick={onOpen} leftIcon={<AddIcon />} colorScheme="teal">
                                Sale Order
                            </Button>
                        </Flex>
                        <SaleOrderModal isOpen={isOpen} onClose={onClose} />
                        <Table mt={4}>
                            <Thead>
                                <Tr>
                                    <Th>id</Th>
                                    <Th>Customer name</Th>
                                    <Th>price(₹)</Th>
                                    <Th>last modified</Th>
                                    <Th>edit</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>1</Td>
                                    <Td>Customer 1</Td>
                                    <Td>₹ 215</Td>
                                    <Td>2024-05-24</Td>
                                    <Td><Button>...</Button></Td>
                                </Tr>
                                <Tr>
                                    <Td>2</Td>
                                    <Td>Customer 2</Td>
                                    <Td>₹ 100</Td>
                                    <Td>2024-05-24</Td>
                                    <Td><Button>...</Button></Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TabPanel>
                    <TabPanel>
                        <Table mt={4}>
                            <Thead>
                                <Tr>
                                    <Th>id</Th>
                                    <Th>Customer Name</Th>
                                    <Th>last modified</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>2</Td>
                                    <Td>Customer 2</Td>
                                    <Td>2024-05-25</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default Orders;
