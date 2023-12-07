class ContainersController < ApplicationController
  def index
    @containers = Container.all
  end

  def show
    @container = Container.find(params[:id])
  end

  def new
    @container = Container.new
    @locations = Location.all
  end

  def create
    @location = Location.find(params[:location_id])

    if !@location 
      return
    end

    @container = Container.new(container_params)
    @container.location_id = @location.id
    puts @container.location_id
    
    if @container.save
      redirect_to @container
    else
      render :new, status: :unprocessable_entity
    end
  end

  private
    def container_params
      params.require(:container).permit(:name, :location_id)
    end
end
