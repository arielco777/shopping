// const [movieList, setMovieList] = useState<any[]>([]);

// const [movieName, setMovieName] = useState("");
// const [movieDate, setMovieDate] = useState(0);
// const [gotOscar, setGotOscare] = useState(false);

// const [fileUpload, setFileUpload] = useState<any>(null);

// const [changeTitle, setChangeTitle] = useState("");

// const moviesCollectionRef = collection(db, "movies");

// const addNewMovie = async () => {
//     try {
//         const response = await addDoc(moviesCollectionRef, {
//             title: movieName,
//             releaseDate: movieDate,
//             gotOscar,
//             userId: auth?.currentUser?.uid,
//         });
//         console.log("Response: ", response);
//     } catch (error) {
//         console.error("Error adding new movie: ", error);
//     } finally {
//         getMovieList();
//     }
// };

// const getMovieList = async () => {
//     try {
//         const data = await getDocs(moviesCollectionRef);
//         const filteredData = data.docs.map((doc) => ({
//             ...doc.data(),
//             id: doc.id,
//         }));
//         setMovieList(filteredData);
//         console.log("Data: ", filteredData);
//     } catch (err) {
//         console.error("Error getting movieList: ", err);
//     }
// };

// const deleteMovie = async (movieId: any) => {
//     try {
//         const movieDoc = doc(db, "movies", movieId);
//         const response = await deleteDoc(movieDoc);
//         console.log("Response: ", response);
//     } catch (error) {
//         console.error("Error deleting movie: ", error);
//     } finally {
//         getMovieList();
//     }
// };

// const updateMovieTitle = async (movieId: any) => {
//     try {
//         const movieDoc = doc(db, "movies", movieId);
//         const response = await updateDoc(movieDoc, {
//             title: changeTitle,
//         });
//         console.log("Response: ", response);
//     } catch (error) {
//         console.error("Error updating movie: ", error);
//     } finally {
//         getMovieList();
//     }
// };
// const uploadFile = async () => {
//     if (!fileUpload) return;
//     console.log("UploadFile: ", fileUpload);
//     // return;
//     try {
//         const filesFolderRef = ref(
//             storage,
//             `projectFiles/${fileUpload[0].name}`
//         );
//         await uploadBytes(filesFolderRef, fileUpload[0]);
//     } catch (error) {
//         console.error("Error uploading files: ", error);
//     }
// };

// useEffect(() => {
//     getMovieList();
// }, []);
