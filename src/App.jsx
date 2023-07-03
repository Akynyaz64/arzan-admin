import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Toaster} from "react-hot-toast";

//COMPONENTS
import {ProtectedRoute, ScrollToTop} from "./components";

//ADMIN
import AdminLayout from "./pages/admin/Layout";
import {Admin, AdminBannerCreate, AdminBannerEdit, AdminBannerView, AdminBanners, AdminCategories, AdminCategoryCreate, AdminCategoryEdit, AdminCategoryView, AdminCoins, AdminCoinsCreate, AdminCoinsEdit, AdminCoinsView, AdminComments, AdminLogin, AdminNotifications, AdminPageCategories, AdminPageCategoryCreate, AdminPageCategoryEdit, AdminPageCategoryView, AdminPages, AdminPaymentHistory, AdminPhotoCreate, AdminPhotoView, AdminPhotos, AdminPostCreate, AdminPostView, AdminPosts, AdminPublicationTypes, AdminPublicationTypesCreate, AdminPublicationTypesEdit, AdminPublicationTypesView, AdminSubCategories, AdminSubCategoryCreate, AdminSubCategoryEdit, AdminSubCategoryView, AdminUserCreate, AdminUserView, AdminUsers, AdminUsersTop, AdminVideoCreate, AdminVideoView, AdminVideos, AdminWelayatCreate, AdminWelayatEdit, AdminWelayats, Test} from "./pages/admin";

//OTHERS
import {AuthContextProvider} from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemeContext";
import NotFound from "./pages/NotFound";
import "./Admin.css";

const App = () => {
    return (
        <>
            <AuthContextProvider>
                <ThemeContextProvider>
                    <Router>
                        <ScrollToTop />
                        <Toaster />
                        <Routes>
                            <Route
                                path="/admin"
                                element={
                                    <ProtectedRoute accessBy="only-admin">
                                        <AdminLayout />
                                    </ProtectedRoute>
                                }
                            >
                                <Route path="" element={<Admin />} />

                                <Route path="users" element={<AdminUsers />} />
                                <Route path="users/top" element={<AdminUsersTop />} />
                                <Route path="users/:userId" element={<AdminUserView />} />
                                <Route path="users/create" element={<AdminUserCreate />} />
                                {/* <Route path="users/edit/:userId" element={<AdminUserEdit />} /> */}

                                <Route path="banners" element={<AdminBanners />} />
                                <Route path="banners/:bannerId" element={<AdminBannerView />} />
                                <Route path="banners/create" element={<AdminBannerCreate />} />
                                <Route path="banners/edit/:bannerId" element={<AdminBannerEdit />} />

                                <Route path="categories" element={<AdminCategories />} />
                                <Route path="categories/:categoryId" element={<AdminCategoryView />} />
                                <Route path="categories/create" element={<AdminCategoryCreate />} />
                                <Route path="categories/edit/:categoryId" element={<AdminCategoryEdit />} />

                                <Route path="subcategories" element={<AdminSubCategories />} />
                                <Route path="subcategories/:subcategoryId" element={<AdminSubCategoryView />} />
                                <Route path="subcategories/create" element={<AdminSubCategoryCreate />} />
                                <Route path="subcategories/edit/:subcategoryId" element={<AdminSubCategoryEdit />} />

                                <Route path="page_categories" element={<AdminPageCategories />} />
                                <Route path="page_categories/:categoryId" element={<AdminPageCategoryView />} />
                                <Route path="page_categories/create" element={<AdminPageCategoryCreate />} />
                                <Route path="page_categories/edit/:categoryId" element={<AdminPageCategoryEdit />} />

                                <Route path="coins" element={<AdminCoins />} />
                                <Route path="coins/:coinId" element={<AdminCoinsView />} />
                                <Route path="coins/create" element={<AdminCoinsCreate />} />
                                <Route path="coins/edit/:coinId" element={<AdminCoinsEdit />} />

                                <Route path="welayats" element={<AdminWelayats />} />
                                <Route path="welayats/create" element={<AdminWelayatCreate />} />
                                <Route path="welayats/edit/:welayatId" element={<AdminWelayatEdit />} />

                                <Route path="photos" element={<AdminPhotos />} />
                                <Route path="photos/:photoId" element={<AdminPhotoView />} />
                                <Route path="photos/create" element={<AdminPhotoCreate />} />
                                {/* <Route path="photos/edit/:photoId" element={<AdminPhotoEdit />} /> */}

                                <Route path="videos" element={<AdminVideos />} />
                                <Route path="videos/:videoId" element={<AdminVideoView />} />
                                <Route path="videos/create" element={<AdminVideoCreate />} />
                                {/* <Route path="videos/edit/:videoId" element={<AdminVideoEdit />} /> */}

                                <Route path="posts" element={<AdminPosts />} />
                                <Route path="posts/:postId" element={<AdminPostView />} />
                                <Route path="posts/create" element={<AdminPostCreate />} />

                                <Route path="publication_types" element={<AdminPublicationTypes />} />
                                <Route path="publication_types/:typeId" element={<AdminPublicationTypesView />} />
                                <Route path="publication_types/create" element={<AdminPublicationTypesCreate />} />
                                <Route path="publication_types/edit/:typeId" element={<AdminPublicationTypesEdit />} />

                                <Route path="payment_history" element={<AdminPaymentHistory />} />

                                <Route path="notifications" element={<AdminNotifications />} />

                                <Route path="pages" element={<AdminPages />} />

                                <Route path="comments" element={<AdminComments />} />
                            </Route>

                            <Route
                                path="/admin/test"
                                element={
                                    <ProtectedRoute accessBy="non-admin">
                                        <Test />
                                    </ProtectedRoute>
                                }
                            ></Route>

                            <Route
                                path="/admin/login"
                                element={
                                    <ProtectedRoute accessBy="non-admin">
                                        <AdminLogin />
                                    </ProtectedRoute>
                                }
                            />

                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Router>
                </ThemeContextProvider>
            </AuthContextProvider>
        </>
    );
};

export default App;
