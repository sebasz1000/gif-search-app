import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Test over useFetchGifs hook", () => {
  test("Should return initial state", () => {
    const { result } = renderHook(() => useFetchGifs("OnePunch"));
    const { gifs, isLoading } = result.current;
    //console.log(gifs);
    expect(isLoading).toBeTruthy();
    expect(gifs.length).toBe(0);
  });
  test("Should return an image array and falsy isLoading", async () => {
    const { result } = renderHook(() => useFetchGifs("Pokemon"));
    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));
    const { isLoading, gifs } = result.current;
    expect(isLoading).toBeFalsy();
    expect(gifs.length).toBeGreaterThan(0);
  });
});
