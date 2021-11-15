import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
const NavBar = () => {
    return (
        <Navbar
            collapseOnSelect
            expand='lg'
            bg='dark'
            variant='dark'
            className='fixed-top'
        >
            <Container>
                <Navbar.Brand href='#home'>Trang chủ</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#features'>Xem lịch dạy</Nav.Link>
                        <Nav.Link href='#pricing'>Báo cáo</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href='#memes'>
                            Tài Khoản
                        </Nav.Link>
                        <Nav.Link href='#deets'>Đăng xuất</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
