import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import mockFetch from "./mocks/mockFetch";


describe("test suite for doggy directory ", () => {
  beforeEach(() => {
    console.log("mock")
    jest.spyOn(window, "fetch").mockImplementation(mockFetch);
  })


  it("renders the landing page", async () => {
    render(<App />);
    expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
    expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
    expect(await screen.findByRole("option", { name: "husky" })).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
    expect(screen.getByRole("img")).toBeInTheDocument();

  });

  test("should be able to search and display dog image results", async () => {
    render(<App />)
    const select = screen.getByRole("combobox");
    expect(await screen.findByRole("option", { name: "husky" })).toBeInTheDocument();
    userEvent.selectOptions(select, "husky");
    console.log(select)
    expect(select).toHaveValue("husky")

    const searchBtn = screen.getByText("Search")
    expect(searchBtn).not.toBeDisabled();
    console.log(searchBtn)
    fireEvent.click(searchBtn)
    await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i));
    const dogImages = screen.getAllByRole("img");
    expect(dogImages).toHaveLength(2)
    expect(screen.getByText(/2 Results/i)).toBeInTheDocument();
    expect(dogImages[0]).toHaveAccessibleName("husky 1 of 2")
    expect(dogImages[1]).toHaveAccessibleName("husky 2 of 2")

  })

  afterEach(() => {
    jest.restoreAllMocks()
  });

});