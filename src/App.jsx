import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Toaster} from "react-hot-toast";

//COMPONENTS
import {ProtectedRoute, ScrollToTop} from "./components";

//ADMIN
import AdminLayout from "./pages/admin/Layout";
import {Admin, AdminBannerCreate, AdminBannerEdit, AdminBannerView, AdminBanners, AdminCategories, AdminCategoryCreate, AdminCategoryEdit, AdminCategoryView, AdminCoinCreate, AdminCoinEdit, AdminCoinView, AdminCoins, AdminComments, AdminFollowRewardEdit, AdminFollowRewards, AdminLogin, AdminNotifications, AdminPageCategories, AdminPageCategoryCreate, AdminPageCategoryEdit, AdminPageCategoryView, AdminPages, AdminPaymentHistory, AdminPhotoAdd, AdminPhotoCreate, AdminPhotoEdit, AdminPhotoInner, AdminPhotoRemove, AdminPhotoView, AdminPhotos, AdminPostCreate, AdminPostEdit, AdminPostView, AdminPosts, AdminPublicationTypeCreate, AdminPublicationTypeEdit, AdminPublicationTypeView, AdminPublicationTypes, AdminServiceCreate, AdminServiceEdit, AdminServiceRequestView, AdminServiceRequests, AdminServiceView, AdminServices, AdminStreakRewardCreate, AdminStreakRewardEdit, AdminStreakRewards, AdminSubCategories, AdminSubCategoryCreate, AdminSubCategoryEdit, AdminSubCategoryView, AdminTopList, AdminTopListLimit, AdminTopListLimitCreate, AdminUserCreate, AdminUserView, AdminUsers, AdminVideoCreate, AdminVideoEdit, AdminVideoView, AdminVideos, AdminWelayatCreate, AdminWelayatEdit, AdminWelayats} from "./pages/admin";

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
                                <Route path="users/:userId" element={<AdminUserView />} />
                                <Route path="users/create" element={<AdminUserCreate />} />
                                {/* <Route path="users/edit/:userId" element={<AdminUserEdit />} /> */}

                                <Route path="top_list" element={<AdminTopList />} />
                                <Route path="top_list/limit" element={<AdminTopListLimit />} />
                                <Route path="top_list/limit/create" element={<AdminTopListLimitCreate />} />

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
                                <Route path="coins/:coinId" element={<AdminCoinView />} />
                                <Route path="coins/create" element={<AdminCoinCreate />} />
                                <Route path="coins/edit/:coinId" element={<AdminCoinEdit />} />

                                <Route path="services" element={<AdminServices />} />
                                <Route path="services/:serviceId" element={<AdminServiceView />} />
                                <Route path="services/create" element={<AdminServiceCreate />} />
                                <Route path="services/edit/:serviceId" element={<AdminServiceEdit />} />

                                <Route path="service-requests" element={<AdminServiceRequests />} />
                                <Route path="service-requests/:requestId" element={<AdminServiceRequestView />} />

                                <Route path="reward/follow" element={<AdminFollowRewards />} />
                                <Route path="reward/follow/edit/:typeId/:locationId" element={<AdminFollowRewardEdit />} />
                                <Route path="reward/streak" element={<AdminStreakRewards />} />
                                <Route path="reward/streak/create" element={<AdminStreakRewardCreate />} />
                                <Route path="reward/streak/edit/:streakId" element={<AdminStreakRewardEdit />} />

                                <Route path="welayats" element={<AdminWelayats />} />
                                <Route path="welayats/create" element={<AdminWelayatCreate />} />
                                <Route path="welayats/edit/:welayatId" element={<AdminWelayatEdit />} />

                                <Route path="photos" element={<AdminPhotos />} />
                                <Route path="photos/:photoId" element={<AdminPhotoView />} />
                                <Route path="photos/create" element={<AdminPhotoCreate />} />
                                <Route path="photos/edit/:photoId" element={<AdminPhotoEdit />} />
                                <Route path="photos/inner/:photoId" element={<AdminPhotoInner />} />
                                <Route path="photos/add/:photoId" element={<AdminPhotoAdd />} />
                                <Route path="photos/remove/:photoId" element={<AdminPhotoRemove />} />

                                <Route path="videos" element={<AdminVideos />} />
                                <Route path="videos/:videoId" element={<AdminVideoView />} />
                                <Route path="videos/create" element={<AdminVideoCreate />} />
                                <Route path="videos/edit/:videoId" element={<AdminVideoEdit />} />

                                <Route path="posts" element={<AdminPosts />} />
                                <Route path="posts/:postId" element={<AdminPostView />} />
                                <Route path="posts/create" element={<AdminPostCreate />} />
                                <Route path="posts/edit/:postId" element={<AdminPostEdit />} />

                                <Route path="publication_types" element={<AdminPublicationTypes />} />
                                <Route path="publication_types/:typeId" element={<AdminPublicationTypeView />} />
                                <Route path="publication_types/create" element={<AdminPublicationTypeCreate />} />
                                <Route path="publication_types/edit/:typeId" element={<AdminPublicationTypeEdit />} />

                                <Route path="payment_history" element={<AdminPaymentHistory />} />

                                <Route path="notifications" element={<AdminNotifications />} />

                                <Route path="pages" element={<AdminPages />} />

                                <Route path="comments" element={<AdminComments />} />
                            </Route>

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
