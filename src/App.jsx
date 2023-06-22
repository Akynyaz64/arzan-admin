import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Toaster} from "react-hot-toast";

//COMPONENTS
import {ScrollToTop} from "./components";

//ADMIN
import AdminLayout from "./pages/admin/Layout";
import {Admin, AdminBannerCreate, AdminBanners, AdminCategories, AdminCategoryCreate, AdminComments, AdminLogin, AdminNotifications, AdminPageCategories, AdminPageCategoryCreate, AdminPages, AdminPayments, AdminPhotoCreate, AdminPhotos, AdminPostCreate, AdminPosts, AdminSubCategories, AdminSubCategoryCreate, AdminUserCreate, AdminUsers, AdminVideoCreate, AdminVideos, AdminWelayats} from "./pages/admin";

//OTHERS
import {AuthProvider} from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemeContext";
import NotFound from "./pages/NotFound";
import "./Admin.css";

const App = () => {
    return (
        <>
            <AuthProvider>
                <ThemeContextProvider>
                    <Router>
                        <ScrollToTop />
                        <Toaster />
                        <Routes>
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
                                <Route path="page_categories" element={<AdminPageCategories />} />
                                <Route path="page_categories/create" element={<AdminPageCategoryCreate />} />

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

export default App;
