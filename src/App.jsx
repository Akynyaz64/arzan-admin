import {BrowserRouter as Router, Outlet, Route, Routes} from "react-router-dom";
import {Toaster} from "react-hot-toast";

//COMPONENTS
import {Footer, Navbar, ScrollToTop} from "./components";

//USER INTERFACE
import {Foto, FotoRead, Home, NoticeCreate, NoticeRead, Notices, NotificationRead, Notifications, Offical, OfficalExpired, OfficalFollow, OfficalSelf, PostAdd, Profile, ProfileBloked, ProfileWallet, TopList, Video} from "./pages/site";

//ADMIN
import AdminLayout from "./pages/admin/Layout";
import {Admin, AdminBannerCreate, AdminBanners, AdminCategories, AdminCategoryCreate, AdminComments, AdminLogin, AdminNotifications, AdminPages, AdminPayments, AdminPhotoCreate, AdminPhotos, AdminPostCreate, AdminPosts, AdminSubCategories, AdminSubCategoryCreate, AdminUserCreate, AdminUsers, AdminVideoCategories, AdminVideoCategoryCreate, AdminVideoCreate, AdminVideos, AdminWelayats} from "./pages/admin";

//OTHERS
import {AuthProvider} from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemeContext";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
    return (
        <>
            <AuthProvider>
                <ThemeContextProvider>
                    <Router>
                        <ScrollToTop />
                        <Toaster />
                        <Routes>
                            <Route path="/" element={<HomeLayout />}>
                                <Route path="/" element={<Home />} />

                                <Route path="/foto" element={<Foto />} />
                                <Route path="/foto/arzanTm" element={<FotoRead />} />

                                <Route path="/video" element={<Video />} />

                                <Route path="/top-list" element={<TopList />} />

                                <Route path="/profile" element={<Profile />} />
                                <Route path="/profile/wallet" element={<ProfileWallet />} />
                                <Route path="/profile/bloked" element={<ProfileBloked />} />

                                <Route path="/offical" element={<Offical />} />
                                <Route path="/offical/follow" element={<OfficalFollow />} />
                                <Route path="/offical/expired" element={<OfficalExpired />} />
                                <Route path="/offical/self" element={<OfficalSelf />} />

                                <Route path="/post-gosmak" element={<PostAdd />} />

                                <Route path="/bildirisler" element={<Notifications />} />
                                <Route path="/bildiris/:notificationId" element={<NotificationRead />} />

                                <Route path="/habarnamalar" element={<Notices />} />
                                <Route path="/habarnama/:noticeId" element={<NoticeRead />} />
                                <Route path="/habarnama-gos" element={<NoticeCreate />} />
                            </Route>

                            <Route path="/admin" element={<AdminLayout />}>
                                <Route path="" element={<Admin />} />

                                <Route path="welayats" element={<AdminWelayats />} />

                                <Route path="users" element={<AdminUsers />} />
                                <Route path="users/create" element={<AdminUserCreate />} />

                                <Route path="banners" element={<AdminBanners />} />
                                <Route path="banners/create" element={<AdminBannerCreate />} />

                                <Route path="categories" element={<AdminCategories />} />
                                <Route path="categories/create" element={<AdminCategoryCreate />} />

                                <Route path="subcategories" element={<AdminSubCategories />} />
                                <Route path="subcategories/create" element={<AdminSubCategoryCreate />} />

                                <Route path="comments" element={<AdminComments />} />

                                <Route path="photos" element={<AdminPhotos />} />
                                <Route path="photos/create" element={<AdminPhotoCreate />} />

                                <Route path="videos" element={<AdminVideos />} />
                                <Route path="videos/create" element={<AdminVideoCreate />} />
                                <Route path="video_categories" element={<AdminVideoCategories />} />
                                <Route path="video_categories/create" element={<AdminVideoCategoryCreate />} />

                                <Route path="notifications" element={<AdminNotifications />} />

                                <Route path="pages" element={<AdminPages />} />

                                <Route path="payments" element={<AdminPayments />} />

                                <Route path="posts" element={<AdminPosts />} />
                                <Route path="posts/create" element={<AdminPostCreate />} />
                            </Route>

                            <Route path="/admin/login" element={<AdminLogin />} />

                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Router>
                </ThemeContextProvider>
            </AuthProvider>
        </>
    );
};

const HomeLayout = () => {
    return (
        <>
            <Navbar />

            <Outlet />

            <Footer />
        </>
    );
};

export default App;
